import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/userPromotionConfig/index.vue';

import userPromotionConfig from './userPromotionConfig';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes.concat(userPromotionConfig),
});

export default router;
