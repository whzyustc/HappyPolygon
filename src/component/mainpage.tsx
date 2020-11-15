import React from "react";
import ReactDOM from "react-dom";

import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { Router, Route, Switch } from 'react-router'
import { Link, HashRouter } from 'react-router-dom'


const menutitles = ["Mainpage"];
const menulinks = ["index"];

export const Mainpage = () => <Layout>
    <Header className="mainpageHeader">
        <h1 id="happypolygonTitle" style={{ textAlign: "center" }}>快乐的多边形</h1>
    </Header>

    <Layout>
        <Sider
            className="shadow1"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken: any) => {
                console.log(broken)
            }}
            onCollapse={(collapsed: any, type: any) => {
                console.log(collapsed, type)
            }}
        >
            <HashRouter>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
                    {menutitles.map((value, index) => (
                        <Menu.Item key={index} id={value}>
                            <Link to={'/' + menulinks[index]}>{value.toUpperCase()}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            </HashRouter>
        </Sider>

        <Content>

        </Content>
    </Layout>

    <Footer>

    </Footer>

</Layout>