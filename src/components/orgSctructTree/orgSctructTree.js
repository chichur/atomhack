import React from 'react';
import orgNode from "./orgNode";
import './orgNode.css';
import { Tree, TreeNode } from 'react-organizational-chart';

const ExampleTree = () => (
    <Tree
        lineWidth={'2px'}
        lineColor={'green'}
        lineBorderRadius={'10px'}
        label={<div>Организация</div>}>
        <TreeNode label={<div>Отдел 1</div>}>
            <TreeNode label={<div>Подотдел 1</div>} />
            <TreeNode label={<div>Подотдел 1</div>} />
        </TreeNode>
        <TreeNode label={<div>Отдел 2</div>}>
            <TreeNode label={<div>Подотдел 1</div>} />
            <TreeNode label={<div>Подотдел 1</div>} />
        </TreeNode>
        <TreeNode label={<div>Отдел 3</div>}>
            <TreeNode label={<div>Подотдел 1</div>} />
            <TreeNode label={<div className="orgNode">Стильный Подотдел</div>} />
        </TreeNode>
    </Tree>
);

export default ExampleTree;