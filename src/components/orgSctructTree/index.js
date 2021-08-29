import React, {useEffect, useState} from 'react';
import styles from './index.module.css'
import OrgNode from './orgNode';
import { Tree, TreeNode } from 'react-organizational-chart';
import SideBar from "../sideBar";

function OrgStructTree(props) {
    //моковые данные
    const test_depart = [
        {name: 'Организация', id: 0, parent: null},
        {name: 'Отдел1', id: 1, parent: 0},
        {name: 'Отдел2', id: 2, parent: 0},
        {name: 'Отдел3', id: 3, parent: 0},
        {name: 'Подотдел1', id: 4, parent: 1},
        {name: 'Подотдел2', id: 5, parent: 1},
        {name: 'Подотдел3', id: 6, parent: 1},
        {name: 'Подотдел1', id: 7, parent: 2},
        {name: 'Подотдел2', id: 8, parent: 2},
        {name: 'Подотдел3', id: 9, parent: 2},
        {name: 'Подотдел1', id: 10, parent: 3},
        {name: 'Подотдел2', id: 11, parent: 3},
        {name: 'Подотдел3', id: 12, parent: 3},
        {name: 'Подотдел4', id: 13, parent: 3},
        {name: 'Подотдел6', id: 14, parent: 3},
        {name: 'Подотдел7', id: 16, parent: 3},
    ]

    const [departamentShow, setDepartamentShow] = useState(false);
    const [departments, setDepartments] = useState(test_depart);
    const [currentDepartment, setCurrentDepartment] = useState(departments[0])

    async function loadData() {
        try {
            const response = await fetch('http://localhost:8000/api/department/');
            if (!response.ok)
                throw new Error(response.statusText);
            const json = await response.json();
            setDepartments(json);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        setDepartamentShow(true);
    }, [currentDepartment]);

    const onDepartmentClick = (e) => {
        let department = departments.find(el => el.id === Number(e.target.id));
        console.log(department, e.target.id);
        setCurrentDepartment(department);
        setDepartamentShow(true);
    }

    function rec(cur) {
        let children = [];
        for (let child of departments) {
            if (child.parent == cur.id) children.push(child);
        }
        cur["children"] = children;
        for (let child of children) rec(child);
    }

    let tree = departments[0];
    rec(tree);

    const renderNode = (node) => {
        if (node) {
            return(
                <TreeNode label={<OrgNode
                        onDepartamentClick={onDepartmentClick}
                        id={node.id}
                        employees={16}
                        workload={50}>{node.name}
                    </OrgNode>}>
                    {node.children.map(value => renderNode(value))}
                </TreeNode>
            );
        }
        else return null;
    }

    let treeView = tree.children.map(value => renderNode(value))

    let root = departments.find(el => el.parent === null)

    return (
      <div className={styles.tree} draggable="true">
          <Tree
            lineWidth={'2px'}
            lineColor={'#989898'}
            lineBorderRadius={'10px'}
            label={<OrgNode id={root.id} employees={16} workload={54}>{root.name}</OrgNode>}>
              {treeView}
          </Tree>
          <SideBar
              show={departamentShow}
              departamentName={currentDepartment.name}
              efficiency={70}
              workload={10}
          />
      </div>
    );
}

export default OrgStructTree;
