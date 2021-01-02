import React from 'react';
import { DatePicker, Statistic, Row, Col } from 'antd';
import { TOTAL_IN, TOTAL_OUT } from '../../Constant/Constant';
import './MonthPicker.css'
import moment from 'moment';

const MonthPicker = () => {
    const monthFormat = 'YYYY-MM';
    return (
        <Row align="middle" justify="center">
            <Col span={6}>
                <Statistic title={TOTAL_OUT} value={112893} precision={0}></Statistic>
            </Col>
            <Col span={6}>
                <Statistic title={TOTAL_IN} value={112893} precision={0}></Statistic>
            </Col>
            <Col span={6}>
                <DatePicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} picker="month" />
            </Col>
        </Row>
    );
}
export default MonthPicker;