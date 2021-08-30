import styles from './index.module.css'
import CardEmployee from "./cardEmployee";
import CardTicket from "./cardTicket";
import { Progress, Tabs } from 'antd';
import { progressColor } from "../../utils";
import { CloseOutlined } from "@ant-design/icons";
import {useEffect, useState} from "react";
const { TabPane } = Tabs;


const SideBar = ({
    show, departamentName, workload, efficiency, onClose,
}) => {

    let display = show ? 'initial' : 'none';

    return (
        <div className={styles.sideBar} style={{display: display}}>
            <h2>{departamentName}</h2>
            <CloseOutlined onClick={onClose} />
            <Tabs centered={true}>
                <TabPane tab="Сотрудники" key="1">
                    <CardEmployee
                        firstName="Иван"
                        lastName="Иванов"
                        staff="Разработчик"
                        efficiency={25}
                        workload={56}
                    />
                    <CardEmployee
                        firstName="Вася"
                        lastName="Пупкин"
                        staff="Слесарь"
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
                                status="active"
                                strokeColor={progressColor(workload)}
                                percent={workload}
                            />
                        </div>
                        <div>
                            <p>Эффективность</p>
                            <Progress
                                type="circle"
                                status="active"
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
                            progress={100}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №3"
                            priority={2}
                            progress={99}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №3"
                            priority={2}
                            progress={99}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №3"
                            priority={2}
                            progress={99}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №3"
                            priority={2}
                            progress={99}
                            deadLine="29.08.21 16:00"
                        />
                        <CardTicket
                            ticketName="Задача №3"
                            priority={2}
                            progress={99}
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
