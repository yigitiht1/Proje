import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Day from './Day'; 
import Week from './Week';
import Hatirla from "./Hatirla.jsx";
import New from './New';
import ProfileEditForm from './ProfileEditForm.jsx';
import LogoutButton from './Logout.jsx';
import Hedefler from './Hedefler.jsx';
import Iletişim from './Iletişim.jsx';


const { Header, Content, Sider } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: ` ${key}`,
}));

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  let label;
  switch (index) {
    case 0:
      label = 'Profil';
      break;
    case 1:
      label = 'Planla';
      break;
    case 2:
      label = 'Hatırlatmalar';
      break;
    default:
      label = `subnav ${key}`;
      break;
  }
  
  const children = new Array(3).fill(null).map((_, j) => {
    const subKey = index * 3 + j + 1;
    let optionLabel;
    switch (subKey) {
      case 1:
        optionLabel = 'Günlük Görevler';
        break;
      case 2:
        optionLabel = 'Haftalık Görevler';
        break;
      case 3:
        optionLabel = 'Hedefler';
        break;
      default:
        optionLabel = `option ${subKey}`;
        break;
    }
    return {
      key: subKey,
      label: optionLabel,
    };
  });

  
  if (label === 'Profil' || label === 'Planla') {
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label,
      children: [...children], 
    };
  }

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label,
    children,
  };
});

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [contentKey, setContentKey] = useState('1'); 


  const handleClickMenu = (e) => {
    const key = e.key;
    setContentKey(key); 
  };

  
  const renderContent = () => {
    switch (contentKey) {
      case '1':
        return <ProfileEditForm />;
      case '2':
        return <Iletişim />;
      case '3':
        return <Hedefler />;
      case '4':
        return <Hatirla />;
      case '5':
        return <New />;
      case '6':
        return <Day />;
      case '7':
        return <Week />;
      case '8':
        return 0;
      case '9':
        return <LogoutButton />;
      case '10':
        return 0;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '64px', 
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content style={{ padding: '0 48px', minHeight: 'calc(100vh - 64px)' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Sider style={{ background: colorBgContainer, height: 'calc(100vh - 12px)' }} width={250}>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} items={items2} onClick={handleClickMenu} />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 'calc(100vh - 100px)', overflow: 'auto' }}>
            {renderContent()} 
          </Content>
        </Layout>
      </Content>
      
    </Layout>
  );
};

export default App;
