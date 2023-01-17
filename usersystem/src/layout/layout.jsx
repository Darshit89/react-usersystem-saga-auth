import React from "react";
import { Layout } from "antd";
import NavBar from "../navbar/navbar";

const { Content } = Layout;

const AppLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Layout className="layout">
        <NavBar> </NavBar>
        <Layout>
          <Content>
            <div className="site-layout-content">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
