import { getService, postService } from './request';

// 获取路由
export const getRouters = () => getService('/getRouters');

// 获取用户活动列表
export const userPromotionConfigList = () => getService('/user/userPromotionConfig/list');
// 修改用户活动列表
export const userPromotionConfigUpdate = (data: CommonMap) => postService('/user/userPromotionConfig/update', data);
