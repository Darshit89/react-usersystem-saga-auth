import React, { useEffect } from "react";
import { Typography, Input, Row, Col, Table, Button } from "antd";
import { SearchOutlined, UserAddOutlined, DeploymentUnitOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import AppLayout from "../../components/layout/layout";
import teamMeeting from "../../Redux/TeamMeeting/action";

const TeamMeetingTable = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(teamMeeting.getTeemMeetingReport())
    }, []);

    const { teemMeetingList } = useSelector((state: any) => state.teamMeeting);

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            render: (text: any) => <>{moment(text).format('DD/MM/YYYY')}</>
        },
        {
            title: 'Title',
            dataIndex: 'title',
            render: (text: any, record: any) => <a onClick={() => history.push(`/teamMeeting/teamMeeting-details/${record._id}`)}>{text}</a>

        },
        {
            title: 'Place',
            dataIndex: 'place',
        },
        {
            title: 'Duration',
            dataIndex: 'duration',
        },
        {
            title: 'Internal Collaborators',
            dataIndex: 'internalEmployees',
        },
        {
            title: 'External Collaborators',
            dataIndex: 'users',
            render: (text: any) => <>{text.length}</>
        },

    ];

    const tableColumns = columns.map((item) => ({
        ...item,
    }));

    return (
        <AppLayout>
            <div>
                <Row>
                    <Col span={1}>
                        <DeploymentUnitOutlined style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={15}> <Typography className={'title-fontStyle '}>
                        LIST OF TEAM MEETINGS
                    </Typography>
                    </Col>
                    <Col span={8} >
                        <Row justify='space-around'>
                            <Col span={12}>
                                <Input size='middle' placeholder="To research.." prefix={<SearchOutlined />} />
                            </Col>
                            <Button type="primary" icon={<UserAddOutlined />}
                                onClick={() => { history.push('/teamMeeting/teamMeeting-report') }}
                            >
                                Meeting Report
                            </Button>

                        </Row>
                    </Col>

                </Row>
            </div>
            <div className={'margin-20'}>
                <Table
                    columns={tableColumns}
                    dataSource={teemMeetingList}
                />
            </div>
        </AppLayout>

    )
}

export default TeamMeetingTable;