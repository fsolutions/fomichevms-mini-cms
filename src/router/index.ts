import { createRouter, createWebHistory } from 'vue-router';
import PostsView from '@/views/PostsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'PostsView',
      component: PostsView
    },
  ]
})

export default router;
