import { observer } from 'mobx-react-lite';
import store from '../Store/store.js';
import { Tree, Input, Layout } from "antd";
import { DownOutlined } from '@ant-design/icons'
import Info from "./Info";
import onSelect from "../actions/onSelect";
import onChange from "../actions/onChange";
import '../App.css';

const { Sider, Content } = Layout;

const MyLayout = () => { // компонент списка продуктов по разделам, который наблюдает за изменениями в store
  return (
    <Layout>
      <Sider width={'50%'} className={'space'}>
        <Input  // поиск по продуктам 
          className={'input'}
          placeholder={'поиск'}
          onChange={onChange}
        />
        <Tree // список продуктов по разделам
          showLine
          switcherIcon={<DownOutlined />}
          className={'tree'}
          defaultExpandAll
          onSelect={onSelect}
          treeData={store.treeData}
        />
      </Sider>
      <Content className={'content'}>
        <Info className={'info'} // блок информации по продуктам 
        />
      </Content>
    </Layout>
  );
};

export default observer(MyLayout);