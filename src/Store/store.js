import { observable } from "mobx";
import data from "./data";

const store = observable({  // Наблюдаемый объект состояний
    main: '', // название раздела
    selectedKey: '', // название продукта
    cost: '', // цена продукта
    treeData: data, // объект хранящий разделы с соответствующими продуктами
})

export default store;