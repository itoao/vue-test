import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Work from '../components/Work.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: App,
  },
  {
    path: "/work",
    component: Work,

  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;

