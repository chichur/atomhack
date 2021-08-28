import '../../../utils'
import styles from '../index.module.css'
import cardTicketStyle from './index.module.css'
import { Progress, Tag } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import {progressColor} from "../../../utils";

const CardTicket = ({
    ticketName, progress, priority, deadLine, ...rest
}) => {
    let prior = {};

    switch (priority) {
        case 0:
            prior.name = "Высокий";
            prior.priorityColor = "red";
            break;
        case 1:
            prior.name = "Средний";
            prior.priorityColor = "orange";
            break;
        case 2:
            prior.name = "Низкий";
            prior.priorityColor = "green";
            break;
        default:
            prior.name = "Низкий";
            prior.priorityColor = "green";
            break;
    }

    return (
        <div className={styles.card} {...rest}>
            <div className={cardTicketStyle.info}>
                <strong>{ticketName}</strong>
                <div className={cardTicketStyle.sign}>
                    <p>Приоритет:</p>
                    <Tag color={prior.priorityColor}>{prior.name}</Tag>
                </div>
                <div className={cardTicketStyle.sign}>
                    <p>Срок выполнения:</p>
                    <Tag icon={<ClockCircleOutlined />} color="default">{deadLine}</Tag>
                </div>
                <div className={cardTicketStyle.sign}>
                    <p>Прогресс выполнения:</p>
                    <Progress
                        percent={progress}
                        status="active"
                        strokeColor={progressColor(progress)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CardTicket