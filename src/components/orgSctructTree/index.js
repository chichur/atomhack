import React, {useEffect} from 'react';
import { connect } from "redux-zero/react";
import actions from "../../redux/actions";
import styles from './index.module.css'
import OrgNode from './orgNode';
import { Tree, TreeNode } from 'react-organizational-chart';

function OrgStructTree(props) {
    useEffect(() => {
        props.loadData();
    }, []);

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

const mapStateToProps = ({departments}) => ({
    departments
});

export default connect(mapStateToProps, actions)(OrgStructTree);
