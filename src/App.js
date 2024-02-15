import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import routesforbidden from './routesforbidden';
// import SideMenu from './components/SideMenu';
// import AppHeader from './components/Header';
// import AppFooter from './components/Footer';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();
  const auth = localStorage.getItem("token");

  return (
    auth ?
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline">
              {routes.map((route) => (
                <Menu.Item key={route.path}>
                  <Link to={route.path}>{route.name}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
            </Header>
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      exact={route.exact}
                      render={() => <route.component />}
                    />
                  ))}
                </Switch>
              </Suspense>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Animechan ©{new Date().getFullYear()} Created by Martin Siregar
            </Footer>
          </Layout>
        </Layout>
      </Router>
      :
      <Router>
        <div>
          <Switch>
            {routesforbidden.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={() => <route.component />}
              />
            ))}
          </Switch>
        </div>
      </Router >
  );
}

export default App;