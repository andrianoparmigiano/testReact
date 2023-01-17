import { observer } from 'mobx-react-lite'
import '../App.css';
import store from '../Store/store.js'
import { Typography, Space } from 'antd';
const { Text, Link, Title } = Typography;

const Info = () => { // компонент информации по продукту, который наблюдает за изменениями в store
    return (
        <Space
            direction="vertical"
        >
            <Title level={4}>{// название раздела
                store.main
            }</Title>
            <Text>{// название продукта
                store.selectedKey
            }</Text>
            <Text>{// цена продукта
                store.cost
            }</Text>
        </Space>
    )
}

export default observer(Info)