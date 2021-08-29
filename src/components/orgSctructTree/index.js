import React, {useEffect, useState} from 'react';
import styles from './index.module.css'
import OrgNode from './orgNode';
import { Tree, TreeNode } from 'react-organizational-chart';

function OrgStructTree(props) {
    const [departments, setDepartments] = useState([]);

    async function loadData() {
        try {
            const response = await fetch('http://localhost:8000/api/department');
            if (!response.ok)
                throw new Error(response.statusText);
            const json = await response.json();
            console.log(json);
            setDepartments(json);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    console.log(departments);

    return (
      <div className={styles.tree}>
          <Tree
            lineWidth={'2px'}
            lineColor={'#989898'}
            lineBorderRadius={'10px'}
            label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
              <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                  <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}/>
                  <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}/>
              </TreeNode>
              <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                  <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}/>
                  <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}/>
              </TreeNode>
              <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                  <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}/>
                  <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}/>
              </TreeNode>
          </Tree>
      </div>
    );
}

export default OrgStructTree;
