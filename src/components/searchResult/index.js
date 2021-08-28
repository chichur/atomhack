import styles from './index.module.css'
import CardEmployee from "../sideBar/cardEmployee";
import CardTicket from "../sideBar/cardTicket";
import React from "react";
import { OrgNode } from "../orgSctructTree";

const SearchResult = ({

}) => {
    return(
        <div className={styles.searchResult}>
            <h1>Результаты поиска</h1>
            <div className={styles.result}>
                <div>
                    <h2>Сотрудники:</h2>
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
                </div>
                <div>
                    <h2>Задачи:</h2>
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
                </div>
                <div className={styles.departaments}>
                    <h2>Департаменты:</h2>
                    <OrgNode employees={16} workload={84}>Департамент</OrgNode>
                    <OrgNode employees={35} workload={60}>Департамент</OrgNode>
                    <OrgNode employees={142} workload={20}>Департамент</OrgNode>
                </div>
            </div>
        </div>

    );
}

export default SearchResult