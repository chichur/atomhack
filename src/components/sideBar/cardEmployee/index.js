import styles from '../index.module.css'
import '../../../utils'
import {Avatar, Progress} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {progressColor} from "../../../utils";

const CardEmployee = ({
    onCardEmployeeClick, staff, workload, efficiency, firstName, lastName,  ...rest
}) => {
    return (
        <div className={styles.card}>
            <Avatar shape="circle" size="large" icon={<UserOutlined />} />
            <div className={styles.info}>
                <strong>{firstName} {lastName}</strong>
                <p style={{'color': '#787878', 'fontSize': '12px'}}>{staff}</p>
                <p style={{'color': '#1890FF'}}>example@example.com</p>
                <p>+7 (914) 111-22-33</p>
                <div className={styles.sign}>
                    <p>Загруженность:</p>
                    <Progress
                        percent={workload}
                        status="active"
                        strokeColor={progressColor(workload)}
                    />
                </div>
                <div className={styles.sign}>
                    <p>Эффективность:</p>
                    <Progress
                        percent={efficiency}
                        steps={5}
                        strokeColor={progressColor(efficiency)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CardEmployee