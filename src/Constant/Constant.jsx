import moment from 'moment';
export const LIST_MODE = '列表模式';
export const CHART_MODE = '图表模式';
export const TOTAL = '余额';
export const TOTAL_OUT = '总支出';
export const TOTAL_IN = '总收入';
export const LATEST_DATE = moment().format("YYYY-MM");
export const items = [
    {
        key: 1,
        activity: '今天吃饭',
        money: 30,
        isOuter: true,
        date: moment('2021-1-30').format("YYYY-MM"),
        category: '美食'
    },
    {
        key: 2,
        activity: '今天吃饭',
        money: 30,
        isOuter: false,
        date: moment('2021-1-10').format("YYYY-MM"),
        category: '美食'
    },
    {
        key: 3,
        activity: '今天吃饭',
        money: 30,
        isOuter: false,
        date: moment('2020-2-14').format("YYYY-MM"),
        category: '美食'
    },
    {
        key: 4,
        activity: '今天吃饭',
        money: 30,
        isOuter: false,
        date: moment('2019-10-30').format("YYYY-MM"),
        category: '美食'
    },
];
export const columns = [
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

export const oppositeNum = (number, isOpposite) => {
    if (isOpposite) {
        return number*(-1);
    } else {
        return number;
    }
}
export const totalNum = (arr) => {
    if (arr.length > 0)
        return arr.reduce((prev, next) => {
            return prev + next;
        })
    else
       return [];
}

