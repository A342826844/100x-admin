import { itemLbaleForMap } from '@/utils/common';

// 通用状态
export const CommonStatus: Array<ItemValue> = [
  {
    key: 'false',
    value: '禁用',
  },
  {
    key: 'true',
    value: '启用',
  },
];

// 活动类型
export const UserPromotionType: Array<ItemValue> = [
  {
    key: 1,
    value: '新用户注册实名送币',
  },
  {
    key: 2,
    value: '首冲送币',
  },
];

export const CommonStatusMap = itemLbaleForMap(CommonStatus);
export const UserPromotionTypeMap = itemLbaleForMap(UserPromotionType);
