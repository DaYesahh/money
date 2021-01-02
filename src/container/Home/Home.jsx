import React, { useState, useEffect } from 'react';
import DetailList from '../../components/List/List';
import DetailChart from '../../components/Chart/Chart';
import ModeSelect from '../ModeSelect/ModeSelect';
import MonthPicker from '../../components/MonthPicker/MonthPicker'
import { LIST_MODE } from '../../Constant/Constant';
import { Divider, Button } from 'antd';

const items = [
    {
        key: 1,
        activity: '今天吃饭',
        money: 30,
        // isOuter: true,
        date: '2020-1-30',
        category: '美食'
    },
    {
        key: 2,
        activity: '今天吃饭',
        money: 30,
        // isOuter: true,
        date: '2020-1-30',
        category: '美食'
    },
    {
        key: 3,
        activity: '今天吃饭',
        money: 30,
        // isOuter: true,
        date: '2020-1-30',
        category: '美食'
    },
    {
        key: 4,
        activity: '今天吃饭',
        money: 30,
        // isOuter: true,
        date: '2020-1-30',
        category: '美食'
    },
];

const columns = [
    {
        title: '活动',
        dataIndex: 'activity',
        key: 'activity',
        className: 'tableColumn',
        align: 'center',
    },
    {
        title: '消费',
        dataIndex: 'money',
        key: 'money',
        className: 'tableColumn',
        align: 'center',
    },
    {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        className: 'tableColumn',
        align: 'center',
    },
    {
        title: '分类',
        dataIndex: 'category',
        key: 'category',
        className: 'tableColumn',
        align: 'center',
    },
];

const Home = () => {
    const [mode, setMode] = useState(LIST_MODE);
    return (
        <div>
            <Divider orientation="center">总预览</Divider>
            <MonthPicker></MonthPicker>
            <Divider orientation="center">详情</Divider>
            <Button type="primary">创建新记录</Button>
            <ModeSelect setMode={setMode}></ModeSelect>
            { mode === LIST_MODE ? <DetailList items={items} columns={columns} ></DetailList> : <DetailChart></DetailChart> }
        </div>
    )
}

export default Home;