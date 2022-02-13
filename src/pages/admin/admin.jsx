import {Layout, Menu, Breadcrumb, Dropdown} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined, DownOutlined} from '@ant-design/icons';
import './admin.css'
import logo from '../../assets/images/logo-bai.png'
import defaultHeadImg from '../../assets/images/headImg.png'
import {Outlet} from "react-router-dom";

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;
const menu = (
  <Menu theme="dark">
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com" style={{fontSize: "10px"}}>
        修改资料
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com" style={{fontSize: "10px"}}>
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

export default function () {
  return (
    <Layout className='container'>
      <header>
        <img src={logo}/>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{color: "white"}}>
            <img src={defaultHeadImg}/>
            username <DownOutlined/>
          </a>
        </Dropdown>
      </header>
      <Layout className='container-content'>
        <Sider width={200}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
          >
            <Menu.Item icon={<UserOutlined/>} key="1">名单</Menu.Item>
            <Menu.Item icon={<LaptopOutlined/>} key="2">黑名单</Menu.Item>
            <Menu.Item icon={<NotificationOutlined/>} key="3">征信管理条例</Menu.Item>
            {/*<SubMenu key="sub" icon={<NotificationOutlined/>} title="subnav 3">*/}
            {/*  <Menu.Item key="4">option3</Menu.Item>*/}
            {/*  <Menu.Item key="5">option4</Menu.Item>*/}
            {/*</SubMenu>*/}
          </Menu>
        </Sider>
        <Layout style={{padding: '0 24px 24px'}}>
          <Breadcrumb style={{margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content className="myContent">
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
      <footer>
        Respect | Copyright &copy; 2022 Author HSH
      </footer>
    </Layout>
  )
}