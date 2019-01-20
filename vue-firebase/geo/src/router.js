import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";
import ViewProfile from "@/components/profile/ViewProfile.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/auth/:target",
      name: "Auth",
      component: () => import("./views/Auth.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/profile/:id",
      name: "ViewProfile",
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

// router guards
router.beforeEach((to, from, next) => {
  // check to see if route has auth guard
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    const user = firebase.auth().currentUser;
    if (user) {
      // User is signed in. Proceed to route
      next();
    } else {
      // No user is signed in. Redirect to login
      next({ path: "/auth/Login" });
    }
  } else {
    // if route is not guarded by auth, proceed
    next();
  }
});

export default router;
