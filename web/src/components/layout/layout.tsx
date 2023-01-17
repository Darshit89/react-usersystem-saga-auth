import React from 'react';
import { Layout } from 'antd';
import NavBar from '../navbar/navbar';
import BreadCrumb from '../breadCrumb/Breadcrumb';

const { Content } = Layout;

const AppLayout: React.FC<{}> = (props) => {
    const { children } = props;
    return (
        <>
            <Layout className="layout">
                <NavBar> </NavBar>
                <Layout>
                    <BreadCrumb />
                    <Content>
                        <div className="site-layout-content">{children}</div>
                    </Content>
                </Layout>
            </Layout>,

        </>
    )
}

export default AppLayout;