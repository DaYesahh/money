import React, { useState, useEffect } from 'react';
import DetailList from '../../components/List/List';
import DetailChart from '../../components/Chart/Chart';
import ModeSelect from '../ModeSelect/ModeSelect';
import MonthPicker from '../../components/MonthPicker/MonthPicker'
import { LIST_MODE, items, columns, oppositeNum, LATEST_DATE, totalNum } from '../../Constant/Constant';
import { Divider, Button } from 'antd';

const Home = () => {
    const [mode, setMode] = useState(LIST_MODE);
    const [date, setDate] = useState(LATEST_DATE);
    const [total, setTotal] = useState(0);
    const [totalIn, setTotalIn] = useState(0);
    const [totalOut, setTotalOut] = useState(0);
    const totalAll = (items, dateString) => {
        let allMon = [];
        let outerMon = 0;
        let inMon = 0;
        items.forEach((item) => {
            if (item.isOuter && dateString === item.date)
                outerMon = outerMon + item.money;
            else if (!item.isOuter && dateString === item.date)
                inMon = inMon + item.money;
        })
        allMon = inMon - outerMon;
        setTotal(allMon);
        setTotalIn(inMon);
        setTotalOut(outerMon);
    };
    const createItem = () => {
        // history.push("/create")
    }
    const dateChange = (date, dateString) => {
        setDate(dateString);
        totalAll(items, dateString);
    };
    return (
        <div>
            <Divider orientation="center">总预览</Divider>
            <MonthPicker date={date} total={total} totalIn={totalIn} totalOut={totalOut} dateChange={dateChange}></MonthPicker>
            <Divider orientation="center">详情</Divider>
            <Button type="primary" onClick={createItem}>创建新记录</Button>
            <ModeSelect setMode={setMode}></ModeSelect>
            { mode === LIST_MODE ? <DetailList items={items} columns={columns} date={date}></DetailList> : <DetailChart></DetailChart>}
        </div>
    )
}

export default Home;