import React from 'react';
import { Layout, Menu, Row, Col, Avatar, Dropdown, Typography } from 'antd';
import {
	TeamOutlined,
	StockOutlined,
	CoffeeOutlined,
	ScheduleOutlined,
	DeploymentUnitOutlined,
	GlobalOutlined,
	LogoutOutlined,
	UserOutlined,
	SnippetsOutlined,
	SettingOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../../Redux/Auth/action';

const { Header } = Layout;
const { SubMenu } = Menu;

const NavBar: React.FC<{}> = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { i18n } = useTranslation();
	const { user } = useSelector((state: any) => state.auth);

	const changeLanguage = ({ key }: any) => {
		i18n.changeLanguage(key);
	};
	return (
		<Header>
			<div >
				<Row className={'header-avtar'}>
					<Avatar size={30} icon={<UserOutlined />} />
				</Row>
				<Row className={'header-title'}>
					<Typography style={{ color: 'white' }}>RCAAQ - SYSTEMENLIGNG SECURISE</Typography >
				</Row>
			</div>
			<div className={'user-title'} >
				<Row justify='space-between'>
					<Col span={20}>
						<Dropdown overlay={
							<Menu>
								<Menu.Item key="setting" icon={<SettingOutlined />} onClick={() => history.push('/system-settings')}>System settings</Menu.Item>
								<Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => dispatch(authActions.logout())}>Logout</Menu.Item>
							</Menu>
						} placement="bottomLeft" arrow>
							<Row justify='space-between'>
								<Col span={10}> <Avatar size={30} icon={<UserOutlined />} /></Col>
								<Col span={14}>   <Typography style={{ color: 'white' }}>{user?.data ? user?.data.user?.username : user.username}</Typography ></Col>
							</Row>
						</Dropdown>
					</Col>
					<Col span={4} className={"language-div"}> <Dropdown overlay={
						<Menu onClick={changeLanguage}>
							<Menu.Item key="fr" >French</Menu.Item>
							<Menu.Item key="en">English</Menu.Item>
						</Menu>
					} placement="bottomLeft" arrow>
						<GlobalOutlined style={{ color: "white", fontSize: '25px' }} />
					</Dropdown></Col>
				</Row>
			</div>
			<Menu theme="dark" mode="horizontal" >
				<Menu.Item key="1" icon={<TeamOutlined />} style={{ backgroundColor: '#001529' }} onClick={() => { history.push('/members') }} >
					Members
				</Menu.Item>
				<SubMenu key="2" icon={<SnippetsOutlined />} title="Reports">
					<Menu.Item key="rep-1" icon={<ScheduleOutlined />} style={{ backgroundColor: '#001529' }} onClick={() => { history.push('/activities') }}>
						Activities
					</Menu.Item>
					<Menu.Item key="rep-2" icon={<CoffeeOutlined />} style={{ backgroundColor: '#001529' }} onClick={() => { history.push('/environments') }}>
						Living environments
					</Menu.Item>
					<Menu.Item key="rep-3" icon={<DeploymentUnitOutlined />} style={{ backgroundColor: '#001529' }} onClick={() => { history.push('/teamMeeting') }} >
						Team meetings
					</Menu.Item>
				</SubMenu>
				<SubMenu key="3" icon={<StockOutlined />} title="Statistiques">
					<Menu.Item key="stat-1" style={{ backgroundColor: '#001529' }} onClick={() => { history.push('/statistiques/interventions-table') }} >Memebers</Menu.Item>
					<Menu.Item key="stat-2" style={{ backgroundColor: '#001529' }} onClick={() => { history.push('/statistiques/activities-table') }} >Activities</Menu.Item>
				</SubMenu>
			</Menu>

		</Header >

	)
}

export default NavBar;