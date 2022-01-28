import { createApp } from 'vue'
// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'


// import Home from './components/pages/Home.vue'

import './assets/style.css'
// const router = createRouter({
// 	routes: [
// 		{ path: '/Home', component: Home},
// 		// { path: '/Doctors', component: Doctors },
// 		// { path: '/Contact', component: Contact },
// 		// { path: '/Login', component: Login },
// 	],
// 	history: createWebHistory()
// });

const app = createApp(App);

// Tell the application to use the router.
// app.use(router);
app.mount('#app');
