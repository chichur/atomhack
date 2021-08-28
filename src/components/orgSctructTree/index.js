import React from 'react';
import styles from './index.module.css'
import { Tree, TreeNode } from 'react-organizational-chart';
import { Progress } from "antd";
import { progressColor } from "../../utils";

const OrgNode = ({
    onDepartamentClick, children, employees, workload
}) => {
    return (
        <div className={styles.orgNode}>
                <h2>{ children }</h2>
                <p style={{'color': '#787878'}}>{employees !== undefined ? 'Сотрудники: ' + employees : ''}</p>
                <Progress
                    percent={workload}
                    status="active"
                    strokeColor={progressColor(workload)}
                />
        </div>
    );
}

const OrgStructTree = () => {
    return (
        <div className={styles.tree}>
            <h1>Дерево</h1>
            <Tree
                lineWidth={'2px'}
                lineColor={'#989898'}
                lineBorderRadius={'10px'}
                label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                    <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>} />
                    <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>} />
                </TreeNode>
                <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                    <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>} />
                    <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>} />
                </TreeNode>
                <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>}>
                    <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>} />
                    <TreeNode label={<OrgNode employees={16} workload={50}>Организация</OrgNode>} />
                </TreeNode>
            </Tree>
        </div>
    );
}

export {OrgStructTree, OrgNode};