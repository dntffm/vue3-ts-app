import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: "/courses",
      name: "courses",
      component: () => import("../components/pages/Courses.vue")
    },
    {
      path: "/courses/class/:id",
      name: "coursesclass",
      component: () => import("../components/pages/Class.vue")
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
