import React, { useState,useEffect } from "react";
import { Typography, Input, Row, Col, Table, Button } from "antd";
import { SearchOutlined, UserAddOutlined, StockOutlined, TeamOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useDispatch,useSelector } from "react-redux";
import moment from "moment";
import AppLayout from "../../components/layout/layout";
import memberActions from "../../Redux/Members/action";

const MemberTable = () => {
	const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
	const history = useHistory();
	const dispatch =useDispatch()
	const { t } = useTranslation();
	interface DataType {
		key: React.Key;
		name: string;
	}
	useEffect(() => {
		dispatch(memberActions.getMemberReport())
	}, []);

	const { memberList } = useSelector((state: any) => state.member);
	
	const columns = [
		{
			title: '# Case',
			dataIndex: 'case',
		},
		{
			title: 'Last name',
			dataIndex: 'lastName',
			render: (text: string,record:any) => <a onClick={() => { history.push(`/members/details/${record._id}`)}}>{text}</a>,

		},
		{
			title: 'Date of Birth',
			dataIndex: 'dob',
			render:(text:string)=><>{moment(text).format('DD/MM/YYYY')}</>
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			sorter: (a: any, b: any) => a.genre - b.genre,
			filters: [
				{
					text: 'Feminin',
					value: 'feminin',
				},
				{
					text: 'Masculin',
					value: 'masculin',
				},
			],
			onFilter: (value: any, record: any) => record.genre.indexOf(value) === 0,
		},
		{
			title: 'Nation',
			dataIndex: 'nation',
			sorter: (a: any, b: any) => a.nation - b.nation,
			filters: [
				{
					text: 'India',
					value: 'india',
				},
				{
					text: 'Masculin',
					value: 'masculin',
				},
			],
			onFilter: (value: any, record: any) => record.nation.indexOf(value) === 0,
		},
		{
			title: 'Community',
			dataIndex: 'apartment',
			sorter: (a: any, b: any) => a.apartment - b.apartment,
			filters: [
				{
					text: 'Manawan',
					value: 'manawan',
				},
				{
					text: 'Wemontaci',
					value: 'wemontaci',
				},
			],
			onFilter: (value: any, record: any) => record.communaute.indexOf(value) === 0,
		},
		{
			title: 'Last intervention',
			dataIndex: 'date',
			sorter: (a: any, b: any) => a.date - b.date,
			render:(text:string)=><>{moment(text).format('DD/MM/YYYY')}</>

		},
	];

	const data: any = [];
	for (let i = 1; i <= 10; i++) {
		data.push({
			key: i,
			dossier: 'John Brown',
			nom: "***",
			date: "26/6/1997",
			genre: "Feminin",
			nation: "Indian",
			communaute: "wemontaci",
			intervention: '21/02/2020'
		});
	}

	const tableColumns = columns.map((item) => ({
		...item,
	}));

	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: (record: DataType) => ({
			name: record.name,
		}),
	};

	return (
		<AppLayout>
			<div>
				<Row>
					<Col span={1}>
						<TeamOutlined style={{ fontSize: '35px' }} />
					</Col>
					<Col span={15}> <Typography className={'title-fontStyle '}>
						{t("Members_Directory")}
					</Typography></Col>
					<Col span={8} >
						<Row justify='space-around'>
							<Col span={12}>
								<Input size='middle' placeholder="To research.." prefix={<SearchOutlined />} />
							</Col>
							<Button type="primary" icon={<UserAddOutlined />}
								onClick={() => { history.push('/members/file-opening') }}
							>
								File opening
							</Button>

						</Row>
					</Col>

				</Row>
			</div>
			<div className={'overflow-x-auto'}>
				<Table
					rowSelection={{
						type: selectionType,
						...rowSelection,
					}}

					columns={tableColumns}
					dataSource={memberList?.members}

				/>
			</div>
			<div>
				<div>
					<Row gutter={12}>
						<Col className="gutter-row" span={4}>
							<div><Button icon={<StockOutlined />}
							>
								View statistics
							</Button></div>
						</Col>
					</Row>
				</div>
			</div>
		</AppLayout>

	)
}

export default MemberTable;