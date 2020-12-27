import moment from 'moment';
import { UserPromotionTypeMap, CommonStatusMap } from '@/commons/index';
import { userPromotionConfigList } from '@/api';

type customRender = (row: any) => any;

const columns: Array<TableColumnsItem> = [
  {
    title: '活动类型',
    key: 'type',
    dataIndex: 'type',
    customRender: ({ text }) => UserPromotionTypeMap[text],
  },
  {
    title: '活动开始时间',
    key: 'startTime',
    dataIndex: 'startTime',
    customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
  {
    title: '活动结束时间',
    key: 'endTime',
    dataIndex: 'endTime',
    customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
  {
    title: '赠送金额',
    key: 'presentAmount',
    dataIndex: 'presentAmount',
    // customRender: ({ text }) => UserPromotionTypeMap[text],
  },
  // {
  //   title: '赠送比例',
  //   key: 'presentRate',
  //   dataIndex: 'presentRate',
  // },
  {
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    customRender: ({ text }) => CommonStatusMap[text],
  },
  {
    title: '创建时间',
    key: 'createdAt',
    dataIndex: 'createdAt',
    customRender: ({ text }) => moment(text).format('YYYY-MM-DD hh:mm:ss'),
  },
  {
    title: '操作',
    key: 'action',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  },
];

export const table = {
  data: [],
  columns,
};

export const getUserPromotionList = async () => {
  try {
    const res = await userPromotionConfigList();
    table.data = res.data;
  } catch (e) {
    // TODO: 错误处理
    table.data = [];
  }
};
