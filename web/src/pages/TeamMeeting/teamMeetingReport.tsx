import React, { useEffect } from "react";
import { Typography, Row, Col, Button, Form, Input, Select, DatePicker, Divider } from "antd";
import { UsergroupAddOutlined, DeploymentUnitOutlined, FileSearchOutlined, MinusCircleOutlined, PlusOutlined, FileAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from "../../components/layout/layout";
import teamMeetingActions from '../../Redux/TeamMeeting/action';
import dropdownActions from '../../Redux/Dropdown/action';

const TeamMeetingReport = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { Option } = Select;

    useEffect(() => {
        dispatch(dropdownActions.getDuration())
    }, []);

    useEffect(() => {
        dispatch(dropdownActions.getOrganization())
    }, []);

    const { durationList } = useSelector((state: any) => state.dropdown);
    const { organizationList } = useSelector((state: any) => state.dropdown);

    const onFinish = (values: any) => {
        dispatch(teamMeetingActions.createTeemMeetingReport(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <AppLayout>
            <div>
                <Row>
                    <Col span={1}>
                        <DeploymentUnitOutlined style={{ fontSize: '35px' }} />
                    </Col>
                    <Col span={23} style={{ fontSize: '30px' }}>
                        <Typography className={'title-fontStyle '}>
                            NEW TEAM MEETING REPORT
                        </Typography>
                    </Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Row>
                    <Col span={1}>
                        <FileSearchOutlined style={{ fontSize: '30px' }} />
                    </Col>
                    <Col span={23}><Typography className={'font-title-member'}>
                        INFORMATIONS
                    </Typography></Col>
                </Row>
            </div>
            <div className={'margin-20'}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row justify='space-between'>
                        <Col span={12}>
                            <div>
                                <Row justify='space-between'>
                                    <Col span={16}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <Form.Item
                                                name="title"
                                                label="Title"
                                                style={{ fontWeight: 500 }}
                                                rules={[{ required: true, message: 'Please input your title!' }]}>
                                                <Input />
                                            </Form.Item>
                                            <Form.Item
                                                name="place"
                                                label="Place"
                                                style={{ fontWeight: 500 }}
                                                rules={[{ required: true, message: 'Please input your place!' }]}>
                                                <Input />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col span={7}>
                                        <div style={{ overflow: 'hidden' }}>
                                            <Form.Item
                                                name="date"
                                                label="Date"
                                                style={{ fontWeight: 500 }}
                                                rules={[
                                                    { type: 'object' as const, required: true, message: 'Please select Date!' }
                                                ]}>
                                                <DatePicker
                                                    style={{ width: '100%' }} />
                                            </Form.Item>
                                        </div>
                                        <div style={{ overflow: 'hidden' }}>
                                            <Form.Item
                                                name="duration"
                                                label="Duration"
                                                style={{ fontWeight: 500 }}
                                                rules={[{ required: true, message: 'Please select Duration!' }]}
                                            >
                                                <Select placeholder="select">
                                                    {durationList?.durations?.map((item: any,index:any) => (
                                                        <Option value={item.id} key={index}>{item.name}</Option>
                                                    ))}
                                                </Select>
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col span={11}>
                            <Form.Item
                                name='meetingCourse'
                                label="Meeting report"
                                style={{ fontWeight: 500 }}
                                rules={[{ required: true, message: 'Please input your meetingCourse!' }]}>
                                <Input.TextArea
                                    placeholder='-general summary of the activity'
                                    rows={5} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <div className={'margin-20'}>
                        <Row>
                            <Col span={1}>
                                <UsergroupAddOutlined style={{ fontSize: '35px' }} />
                            </Col>
                            <Col span={23}><Typography className={'font-title-member'}>
                                Present Collaborators
                            </Typography></Col>
                        </Row>
                    </div>
                    <div style={{ overflow: 'hidden' }} className={'margin-20'}>
                        <Typography style={{ fontWeight: 500 }}>
                            Internal Employees</Typography>
                        <div className={'margin-20'}>
                            <Form.Item
                                name="internalEmployees"
                                style={{ fontWeight: 500 }}
                                rules={[{ required: true, message: 'Select employees' }]}
                            >
                                <Input placeholder="Select employees" />
                            </Form.Item>
                        </div>
                    </div>
                    <Divider />
                    <div className={'margin-20'}>
                        <Typography className={'font-title-member'}>
                            Employees of external partners</Typography>
                    </div>
                    <div className={'margin-20'}>
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField },index) => (
                                        <Row justify='space-between' key={index} >
                                            <Col span={5}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'firstName']}
                                                    fieldKey={[fieldKey, 'firstName']}
                                                >
                                                    <Input placeholder="FirstName"
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={5}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'lastName']}
                                                    fieldKey={[fieldKey, 'lastName']}
                                                // rules={[{ required: true, message: 'Missing last name' }]}
                                                >
                                                    <Input placeholder="LastName" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={5}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'role']}
                                                    fieldKey={[fieldKey, 'role']}
                                                >
                                                    <Input placeholder="Job" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={5}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'organization']}
                                                    fieldKey={[fieldKey, 'organization']}
                                                >
                                                    <Select placeholder="Select the Organization" >
                                                        {organizationList?.organizations?.map((item: any,index:any) => (
                                                            <Option value={item.id} key={index}>{item.name}</Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </Col>

                                            <Col span={1}>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Col>
                                        </Row>
                                    ))}
                                    <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                                        <Button type="dashed"
                                            onClick={() => add()} block icon={<PlusOutlined />}>
                                            Add 5 Non Member Participatns
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </div>
                    <div className={'margin-20'}>
                        <Form.Item wrapperCol={{ offset: 12, span: 24 }}>
                            <Button type="primary" htmlType="submit" icon={<FileAddOutlined />}>
                                Register
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </AppLayout>
    )
}

export default TeamMeetingReport;