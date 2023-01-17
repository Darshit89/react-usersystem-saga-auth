import React, { useEffect } from 'react'
import { Typography, Row, Col, Table, Form } from "antd";
import { FileSearchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AppLayout from '../../components/layout/layout';
import teamMeetingActions from '../../Redux/TeamMeeting/action';


const TeamMeetingDetails = ({ match }: any) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { Title } = Typography;

  useEffect(() => {
    dispatch(teamMeetingActions.teemMeetingDetail(id));
  }, []);

  const { teamMeetingDetail } = useSelector((state: any) => state.teamMeeting);

  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
    },
    {
      title: 'Organization',
      dataIndex: 'organization'
    },
    {
      title: 'Job',
      dataIndex: 'role',
    },

  ];


  const tableColumns = columns.map((item) => ({
    ...item,
  }));

  return (
    <AppLayout>
      <div className={'margin-20'}>
        <Row justify='space-between' >
          <Col span={1}>
            <FileSearchOutlined style={{ fontSize: '30px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'font-title-member '}>
              INFORMATIONS
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <div className={'form-block'}>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Form>
                    <Row>
                      <Col span={6}>
                        <div className={'form-label'}>
                          <Title level={5}>Title</Title>
                        </div>
                      </Col>
                      <Col span={18} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>{teamMeetingDetail?.teamMeeting?.title}</Title>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className={'form-label'}>
                          <Title level={5}>Date</Title>
                        </div>
                      </Col>
                      <Col span={18} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>
                            {moment(teamMeetingDetail?.teamMeeting?.date).format('DD/MM/YYYY')}
                          </Title>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className={'form-label'}>
                          <Title level={5}>Duration</Title>
                        </div>
                      </Col>
                      <Col span={6} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>{teamMeetingDetail?.teamMeeting?.duration}</Title>
                        </div>
                      </Col>
                      <Col span={6}>
                        <div className={'form-label'}>
                          <Title level={5}>Place</Title>
                        </div>
                      </Col>
                      <Col span={6} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>{teamMeetingDetail?.teamMeeting?.place}</Title>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Form>
                    <Row>
                      <Col span={6}>
                        <div className={'form-label-team'}>
                          <Title level={5}>Meeting report</Title>
                        </div>
                      </Col>
                      <Col span={18} className={'input-block'}>
                        <div className={'input-text'}>
                          <Title level={5}>{teamMeetingDetail?.teamMeeting?.meetingCourse}</Title>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={'margin-20'}>
        <Row justify='space-between' >
          <Col span={1}>
            <UsergroupAddOutlined style={{ fontSize: '30px' }} />
          </Col>
          <Col span={23}>
            <Typography className={'font-title-member '}>
              EMPLOYEE PRESENTS
            </Typography>
          </Col>
        </Row>
      </div>
      <div className={'margin-20'}>
        <Table
          columns={tableColumns}
          dataSource={teamMeetingDetail?.teamMeeting?.users}
          pagination={false}
        />
      </div>
    </AppLayout>
  )
}
export default TeamMeetingDetails;
