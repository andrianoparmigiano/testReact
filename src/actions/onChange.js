import store from '../Store/store.js';
import { action } from "mobx";
import data from "../Store/data.js";

const onChange = action((e) => {// функция, изменющая состояния списка продкутов при поиске
    let val = e.target.value.toLowerCase();
    let product = [];
    let control = false;

    if (val === '') {// если ничего не введено - выводить весь список
        store.treeData = data;
        return;
    };

    for (let itemSection of data) {// иначе искать в списке совпадения и выводить только их
        for (let itemProduct of itemSection.children) {
            if (itemProduct.title.toLowerCase().includes(val)) {
                product.push(itemProduct);
                product = product.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
                store.treeData = product;
                control = true;
            }
        }
    }

    if (!control) store.treeData = [{//если ничего не найдено - вывод соответствующего сообщения
        title: 'Не найдено',
        key: '0-0',
        not: true,
    }];
});

export default onChange;
