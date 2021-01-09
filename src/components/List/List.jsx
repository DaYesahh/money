import React from 'react';
import { Table, Empty } from 'antd';

const DetailList = ({items, columns, date}) => {
    if (items.length == 0 || !items) {
        return <Empty/>
    }
    const dateItems = items.filter((item) => {
        return item.date === date
    })
    return (
        <Table columns={columns} dataSource={dateItems} bordered={true} pagination={false} size='middle' />
    );
}
export default DetailList;