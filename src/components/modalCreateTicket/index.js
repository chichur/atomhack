import styles from './index.module.css'
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import {Button, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Radio } from 'antd';
import {DatePicker} from "antd/es";

const ModalCreateTicket = ({

}) => {
    const [showModal, setShowModal] = useState(true);
    const [priority, setPriority] = useState("0");

    const closeModalHandler = () => {
        setShowModal(false)
    }

    const handleSizeChange = (e) => {
        setPriority(e.target.value)
    }

    let display = 'initial';

    if (showModal === false) {
        display = 'none'
    }

    return (
        <div className={styles.fadeWrapper} style={{display: display}}>
            <div className={styles.modalCreateTicket} >
                <h2>Добавить задачу</h2>
                <CloseOutlined onClick={closeModalHandler} />
                <Input placeholder="Название задачи" />
                <TextArea rows={4} placeholder="Описание задачи"/>
                <p>Приоритет задачи:</p>
                <Radio.Group value={priority} onChange={handleSizeChange}>
                    <Radio.Button value="0">Высокий</Radio.Button>
                    <Radio.Button value="1">Средний</Radio.Button>
                    <Radio.Button value="2">Низкий</Radio.Button>
                </Radio.Group>
                <p>Срок выполнения:</p>
                <DatePicker/>
                <p>Департамент:</p>
                <Input placeholder="Департамент" />
                <Button type="primary">Добавить</Button>
                <Button onClick={closeModalHandler}>Отмена</Button>
            </div>
        </div>
    );
}

export default ModalCreateTicket