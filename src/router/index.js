import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../views/layout/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Index,
    children:[
      {
        path: "/",
        name: "login",
        component: () => import("../views/Login.vue")
      },
      {
        path: "/chat",
        name: "chat",
        component: () => import("../views/Chat.vue"),
        params: route => ({
          name: route.params.name
        }),
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/**
 * Navigation guard to grant access to certain routes only when
 * the user is authenticated(name)
 */
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if (to.params.name != undefined) {
      next();
    } else {
      next({ name: "login"});
    }
    next()
  }else{
    next();
  }
});

export default router;
