import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
// Components
import Dashboard from './templates/Dashboard.vue';
import Index from './templates/Index.vue';
import Recipes from './templates/Recipes.vue';
import AboutUs from './templates/AboutUs.vue';
import Pricing from './templates/Pricing.vue';
// import FullRecipe from './templates/FullRecipe.vue';
import Profile from './templates/Profile.vue';
import Register from './templates/Register.vue';
import Login from './templates/Login.vue';
import EditRecipe from './templates/EditRecipe.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing
    },
    {
      path:'/about',
      name: 'About',
      component: AboutUs
    },
    {
      path: '/dashboard/:username',
      name: 'Dashboard',
      component: Dashboard,
      props: true,
      children: [
        {
          path: 'profile', 
          name: 'Profile',
          component: Profile
        },
        {
          path: 'recipes',
          name: 'Recipes',
          component: Recipes,
        },
        {
          path: 'recipes/edit',
          name: 'EditRecipe',
          component: EditRecipe
        },
        // {
        //   path: 'full-recipe',
        //   name: 'fullecipe',
        //   component: FullRecipe
        // }
      ]
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (this.$store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;