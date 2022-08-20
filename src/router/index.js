import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../components/pages/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/pages/Register.vue")
    },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../components/pages/Home.vue")
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../components/pages/Courses.vue")
    },
    {
      path: "/class/:id",
      name: "coursesclass",
      component: () => import("../components/pages/Class.vue")
    },
    {
      path: "/class/:id/:subid",
      name: "subClass",
      component: () => import("../components/pages/SubClass.vue")
    },
    {
      path: "/agendas",
      name: "agendas",
      component: () => import("../components/pages/Agendas.vue")
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../components/pages/Articles.vue")
    },
    {
      path: "/webinars",
      name: "webinars",
      component: () => import("../components/pages/Webinars.vue")
    },
    {
      path: "/myclass",
      name: "myclass",
      component: () => import("../components/pages/Myclass.vue")
    },
    
  ],
});

export default router;
