import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../components/pages/Login.vue"),
      meta: {
        authPage: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/pages/Register.vue"),
      meta: {
        authPage: true
      }
    },
    {
      path: "/",
      name: "dashboard",
      component: () => import("../components/pages/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../components/pages/Courses.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/courses/list",
      name: "courses list",
      component: () => import("../components/pages/Admin/Course/List.vue"),
      meta: {
        requiresAuth: true,
        onlyAdmin: true
      }
    },
    {
      path: "/class/:id",
      name: "coursesclass",
      component: () => import("../components/pages/Class.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/class/:id/:subid",
      name: "subClass",
      component: () => import("../components/pages/SubClass.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/agendas",
      name: "agendas",
      component: () => import("../components/pages/Agendas.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../components/pages/Articles.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/webinars",
      name: "webinars",
      component: () => import("../components/pages/Webinars.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/myclass",
      name: "myclass",
      component: () => import("../components/pages/Myclass.vue"),
      meta: {
        requiresAuth: true
      }
    },
    
  ],
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !localStorage.getItem('token')) {
    window.location.href = "/login";
  }

  if(to.meta.authPage && localStorage.getItem('token')) {
    window.location.href = "/";
  }

  return next();
});

export default router;
