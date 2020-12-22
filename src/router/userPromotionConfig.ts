import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/userPromotionConfig',
    name: 'userPromotionConfig',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/userPromotionConfig/index.vue'),
    meta: {
      hidden: true,
    },
  },
];

export default routes;
