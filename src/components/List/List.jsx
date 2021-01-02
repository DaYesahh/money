import React from 'react';
import { Table, Empty } from 'antd';

const DetailList = ({items, columns}) => {
    if (items.length == 0 || !items) {
        return <Empty/>
    }
    return (
        <Table columns={columns} dataSource={items} bordered={true} pagination={false} size='middle' />
    );
}
export default DetailList;