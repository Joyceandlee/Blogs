import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom';
import WriteBlogs from './Index/WriteBlogs';
import Blogs from './Index/Blogs';
import Msg from './Index/Msg';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

export default class Index extends Component {
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['3']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="3"><NavLink to="/index/msg">我的信息</NavLink></Menu.Item>
                            <Menu.Item key="1"><NavLink to="/index/blogs">博客园</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to="/index/writeblogs">发表博客</NavLink></Menu.Item>

                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item></Breadcrumb.Item>
                            <Breadcrumb.Item></Breadcrumb.Item>
                            <Breadcrumb.Item></Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Route path="/index/msg" component={Msg} />
                            <Route path="/index/blogs" component={Blogs} />
                            <Route path="/index/writeblogs" component={WriteBlogs} />

                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }
}
