import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import Home from './components/pages/Home.vue'
import Bus from './components/pages/Busses.vue'
import ContactUs from './components/pages/ContactUs.vue'

import './assets/style.css'
const router= createRouter({
      routes:[
            { path: '/Home', component: Home},
            { path: '/Busses', component: Bus},
            { path: '/ContactUs', component: ContactUs},
      ],
      history:createWebHistory()
});

const app = createApp(App);

// Tell the application to use the router.
app.use(router);
app.mount('#app');
