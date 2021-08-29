import styles from "../index.module.css";
import {Progress} from "antd";
import {progressColor} from "../../../utils";

const OrgNode = ({
   id, onDepartamentClick, children, employees, workload
}) => {
    return (
        <div className={styles.orgNode} id={id} onClick={onDepartamentClick}>
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

export default OrgNode
