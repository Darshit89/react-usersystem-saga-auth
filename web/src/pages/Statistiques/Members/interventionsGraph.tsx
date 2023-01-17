import React from "react";
import { Typography, Card, Row, Col, Table, Button } from "antd";
import { RedoOutlined, CopyOutlined, FileExcelOutlined, StockOutlined } from '@ant-design/icons';
import AppLayout from "../../../components/layout/layout";

const InterventionsGraph = () => {
    const columns = [
        {
            title: 'Genre',
            dataIndex: 'genre',
            key: 'genre',
        },
        {
            title: 'Etatcivil',
            dataIndex: 'etatcivil',
            key: 'etatcivil',
        },
        {
            title: 'Nation',
            dataIndex: 'nation',
            key: 'nation',
        },
        {
            title: 'Communaute',
            dataIndex: 'communaute',
            key: 'communaute',
        },
        {
            title: 'Tranche d age',
            dataIndex: 'age',
            key: 'age',
        },

    ];

    const data = [
        {
            key: '1',
            genre: 'Female',
            etatcivil: 'Divorce',
            nation: 'Indian',
            communaute: 'Manawan',
            age: '25-54',
        },
        {
            key: '2',
            genre: 'Male',
            etatcivil: 'Divorce',
            nation: 'Indian',
            communaute: 'Wemontaci',
            age: '0',
        },
        {
            key: '3',
            genre: 'Female',
            etatcivil: 'Divorce',
            nation: 'Spanish',
            communaute: 'Wemontaci',
            age: '55+',
        },
        {
            key: '4',
            genre: 'Famle',
            etatcivil: 'Divorce',
            nation: '',
            communaute: 'Wemontaci',
            age: '24',
        },
    ];

    return (
        <AppLayout>
            <div>
                <Row>
                    <Col span={1}>
                        <StockOutlined style={{ fontSize: '35px' }} />
                    </Col>
                    <Col span={18}> <Typography className={'title-fontStyle '}>
                        STATISTIQUES: INTERVENTIONS
                    </Typography></Col>
                    <Col span={5} >
                        <Button type="primary" icon={<RedoOutlined />}
                        >
                            Recommencer
                        </Button>
                    </Col>
                </Row>
            </div>
            <div>
                <Row justify="space-between" className={'margin-20'}>
                    <Col span={11}>
                        <Card className={'height-100'}>
                            <Typography className={'font-color'}>Interventions correspondantes</Typography>
                            <Typography className={'graph-fontStyle'}>70</Typography>
                        </Card>
                    </Col>
                    <Col span={11}>
                        <Card className={'height-100'}>
                            <Typography className={'font-color'}>Members correspondantes</Typography>
                            <Typography className={'graph-fontStyle'}>43</Typography>
                        </Card>
                    </Col>

                </Row>
            </div>
            <div className={'margin-20'}>
                <Table columns={columns} dataSource={data}
                    bordered
                />
            </div>
            <div>
                <Row gutter={12}>
                    <Col className="gutter-row" span={4}>
                        <div><Button icon={<CopyOutlined />}
                        >
                            Copier le tableau
                        </Button></div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div ><Button icon={<FileExcelOutlined />}
                        >
                            Exporter vers Excel
                        </Button></div>
                    </Col>
                </Row>
            </div>
        </AppLayout >
    )
}

export default InterventionsGraph;