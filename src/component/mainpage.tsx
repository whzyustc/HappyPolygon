import React from "react";
import ReactDOM from "react-dom";

import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



export const Mainpage = () => <Layout>
    <Header className="mainpageHeader">
        <h1 id="happypolygonTitle" style={{ textAlign: "center" }}>快乐的多边形</h1>
    </Header>

    <Layout>
        <Sider>

        </Sider>

        <Content>

        </Content>
    </Layout>

</Layout>