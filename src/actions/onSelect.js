import store from '../Store/store.js'
import { action } from "mobx";
import { List } from 'antd';
import data from '../Store/data.js';

const onSelect = action((selectedKeys, info) => {// функция, изменющая состояния информационного компонента при выборе продукта или раздела
    if (info.selected) {// если выбран данный продукт или раздел - менять состояния
        if (info.node.not) {// если поиск ничего не нашел, то ничего не выводиться
            store.main = '';
            store.selectedKey = '';
            store.cost = '';
        }
        else if (info.node.prime === true) {//если выбран раздел, то выводить данный раздел с продуктами
            store.cost = '';
            store.main = `Продукты ${info.node.title}`;
            let arr = info.node.children.map((el) => {
                return el.title
            });
            store.selectedKey = <List
                dataSource={arr}
                renderItem={item => <List.Item>{item}</List.Item>}
            />;
        }
        else {//если продукт, то выводить продукт с информацией
            store.main = `Продукты ${data.find((item) => {
                return info.node.key.slice(0, 3) === item.key
            }).title}`;
            store.selectedKey = info.node.title;
            store.cost = `Цена: ${info.node.price}`;
        };
    }
    else { // если ничего не выбрано, очищать поле информации
        store.main = '';
        store.selectedKey = '';
        store.cost = '';
    };
});

export default onSelect;


