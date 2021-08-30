import React, {useEffect, useState} from 'react';
import styles from './index.module.css'
import OrgNode from './orgNode';
import { Tree, TreeNode } from 'react-organizational-chart';
import SideBar from "../sideBar";

function OrgStructTree(props) {
    //моковые данные
    // const test_depart = [
    //     {name: 'Организация', id: 0, parent: null},
    //     {name: 'Отдел1', id: 1, parent: 0},
    //     {name: 'Отдел2', id: 2, parent: 0},
    //     {name: 'Отдел3', id: 3, parent: 0},
    //     {name: 'Подотдел1', id: 4, parent: 1},
    //     {name: 'Подотдел2', id: 5, parent: 1},
    //     {name: 'Подотдел3', id: 6, parent: 1},
    //     {name: 'Подотдел1', id: 7, parent: 2},
    //     {name: 'Подотдел2', id: 8, parent: 2},
    //     {name: 'Подотдел3', id: 9, parent: 2},
    //     {name: 'Подотдел1', id: 10, parent: 3},
    //     {name: 'Подотдел2', id: 11, parent: 3},
    //     {name: 'Подотдел3', id: 12, parent: 3},
    //     {name: 'Подотдел4', id: 13, parent: 3},
    //     {name: 'Подотдел6', id: 14, parent: 3},
    //     {name: 'Подотдел7', id: 16, parent: 3},
    // ]

    const [departamentShow, setDepartamentShow] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [openedDepartmentId, setOpenedDepartmentId] = useState(departments[0])

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

    const onDepartmentClick = (id) => {
        setOpenedDepartmentId(id);
        setDepartamentShow(true);
    }
    const onSidebarClose = (e) => {
        setDepartamentShow(false);
        setOpenedDepartmentId(null);
    }

    function rec(cur) {
        let children = [];
        for (let child of departments) {
            if (child.parent === cur.id) children.push(child);
        }
        cur["children"] = children;
        for (let child of children) rec(child);
    }

    const renderNode = (node) => {
        if (node) {
            return (
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

    console.log(departments);

    let treeView = '';
    let root = '';
    if (departments.length) {
        let tree = departments[0];
        rec(tree);
        treeView = tree.children.map(value => renderNode(value));
        root = departments.find(el => el.parent === null);
    }

    return (
      <div className={styles.tree} draggable="true">
          <Tree
            lineWidth={'2px'}
            lineColor={'#989898'}
            lineBorderRadius={'10px'}
            label={<OrgNode onDepartamentClick={onDepartmentClick} id={root.id} employees={16}
                            workload={54}>{root.name}</OrgNode>}>
              {treeView}
          </Tree>
          <SideBar
              show={departamentShow}
              onClose={onSidebarClose}
              departamentId={openedDepartmentId}
              efficiency={70}
              workload={10}
          />
      </div>
    );
}

export default OrgStructTree;
