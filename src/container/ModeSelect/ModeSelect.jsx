import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { CHART_MODE, LIST_MODE } from '../../Constant/Constant';

const ModeSelect = (props) => {
    const { setMode } = props;
    return (
        <Menu defaultSelectedKeys={["mail"]} mode="horizontal" style={ { width: 400, margin: '0 auto', textAlign: 'center' } }>
            <Menu.Item key="mail" onClick={() => setMode(LIST_MODE)} icon={<MailOutlined />}>
            {LIST_MODE}
            </Menu.Item>
            <Menu.Item key="app" onClick={() => setMode(CHART_MODE)} icon={<AppstoreOutlined />}>
            {CHART_MODE}
            </Menu.Item>
        </Menu>
    );
}

export default ModeSelect;