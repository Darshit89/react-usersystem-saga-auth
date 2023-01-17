import React, { useState } from "react";
import { Typography, DatePicker, Row, Col, Table, Button } from "antd";
import moment from 'moment';
import { StockOutlined, FundOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import AppLayout from "../../../components/layout/layout";

const ActivitiesTable = () => {
  const { RangePicker } = DatePicker;
  const history = useHistory();
  const dateFormat = 'YYYY/MM/DD';
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  const columns = [
    {
      title: 'Besoins et difficulties',
      dataIndex: 'name',
      render: (text: string) => <span className={'font-color'}>{text}</span>,
    },
  ];
  interface DataType {
    key: React.Key;
    name: string;
  }

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown'
    },
    {
      key: '2',
      name: 'Jim Green'
    },
    {
      key: '3',
      name: 'Joe Black'
    },
    {
      key: '4',
      name: 'Disabled User'
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
      name: record.name,
    }),
  };

  return (
    <AppLayout >
      <Row justify="space-between">
        <Col span={1}>
          <FundOutlined style={{ fontSize: '35px' }} />
        </Col>
        <Col span={23}>
          <Typography className={'title-fontStyle '}>
            STATISTIQUES: ACTIVITIES
          </Typography>
        </Col>
      </Row>
      <div className={'padding-20'}>
        <Row className={'content-center'}>
          <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
          />
        </Row>

      </div>

      <Row justify="space-between">
        <Col span={11}>
          <Table
            rowSelection={{
              type: selectionType,
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered

          />
        </Col>
        <Col span={11}> <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        /></Col>

      </Row>
      <div className={'padding-20'}>
        <Row className={'content-center'}>
          <Button type="primary" icon={<StockOutlined />}
            onClick={() => { history.push('/statistiques/activities-graph') }}>
            View ies statistiques
          </Button>
        </Row>
      </div>
    </AppLayout>
  )
}

export default ActivitiesTable;