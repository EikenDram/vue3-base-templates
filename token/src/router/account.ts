import Layout from '@/layouts/login/LayoutIndex.vue'

import Login from '@/views/account/LoginView.vue';

export default {
    path: '/account',
    component: Layout,
    children: [
        { path: '', redirect: 'login' },
        { path: 'login', component: Login },
    ]
};
