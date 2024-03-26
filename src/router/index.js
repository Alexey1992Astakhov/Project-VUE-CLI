import Vue from "vue";
import VueRouter from "vue-router";
import Home1Page from "@/pages/Home1Page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home1Page,
  },
  {
    path: "/home",
    component: Home1Page,
  },
  {
    path: "/project",
    component: () => import("../pages/Project3Page.vue"),
  },
  {
    path: "/project/:page",
    component: () => import("../pages/Project3Page.vue"),
  },
  {
    path: "/blog",
    component: () => import("../pages/Blog2Page.vue"),
  },
  {
    path: "/blog/:page",
    component: () => import("../pages/Blog2Page.vue"),
  },
  {
    path: "/blog-details",
    component: () => import("../pages/BlogDetails4Page.vue"),
  },
  {
    path: "/project-details",
    component: () => import("../pages/ProjectDetails5Page.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
  {
    path: "/404",
    component: () => import('../pages/Not6FoundPage.vue')
  }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
