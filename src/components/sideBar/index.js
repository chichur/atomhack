import styles from './index.module.css'
import CardEmployee from "./cardEmployee";
import CardTicket from "./cardTicket";
import { Progress, Tabs } from 'antd';
import {progressColor} from "../../utils";
const { TabPane } = Tabs;


const SideBar = ({
    departamentName, workload, efficiency
}) => {
    return (
        <div className={styles.sideBar}>
            <h2>{departamentName}</h2>
            <Tabs centered={true}>
                <TabPane tab="Сотрудники" key="1">
                    <CardEmployee
                        firstName="Иван"
                        lastName="Иванов"
                        efficiency={25}
                        workload={56}
                    />
                    <CardEmployee
                        firstName="Вася"
                        lastName="Пупкин"
                        efficiency={80}
                        workload={20}
                    />
                    <CardEmployee firstName="Гарри" lastName="Поттер"/>
                </TabPane>
                <TabPane tab="Задачи" key="2">
                    <div className={styles.tabPane}>
                        <div>
                            <p>Загруженность</p>
                            <Progress
                                type="circle"
                                strokeColor={progressColor(workload)}
                                percent={workload}
                            />
                        </div>
                        <div>
                            <p>Эффективность</p>
                            <Progress
                                type="circle"
                                strokeColor={progressColor(efficiency)}
                                percent={efficiency}
                            />
                        </div>
                    </div>
                    <div>
                        <CardTicket
                            ticketName="Задача №1"
                            priority={0}
                            progress={43}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №2"
                            priority={1}
                            progress={53}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №3"
                            priority={2}
                            progress={99}
                            deadLine="29.08.21 16:00"
                        />
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default SideBar