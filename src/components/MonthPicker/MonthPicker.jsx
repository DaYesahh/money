import React from 'react';
import { DatePicker, Statistic, Row, Col } from 'antd';
import { TOTAL, TOTAL_IN, TOTAL_OUT } from '../../Constant/Constant';
import './MonthPicker.css'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

const MonthPicker = ({ date, total, totalIn, totalOut, dateChange }) => {
    const monthFormat = 'YYYY-MM';
    return (
        <Row align="middle" justify="center">
            <Col span={6}>
                <Statistic title={TOTAL} value={total} precision={0}></Statistic>
            </Col>
            <Col span={6}>
                <Statistic title={TOTAL_OUT} value={totalIn} precision={0}></Statistic>
            </Col>
            <Col span={6}>
                <Statistic title={TOTAL_IN} value={totalOut} precision={0}></Statistic>
            </Col>
            <Col span={6}>
                <DatePicker locale={locale} defaultValue={moment(date, monthFormat)} format={monthFormat} picker="month" onChange={dateChange} allowClear={false} />
            </Col>
        </Row>
    );
}
export default MonthPicker;