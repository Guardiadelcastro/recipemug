import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';
// Components
import Dashboard from './pages/Dashboard.vue';
import Index from './templates/Index.vue';
import UserHome from './templates/UserHome.vue';
import AboutUs from './templates/AboutUs.vue';
import Pricing from './templates/Pricing.vue';
import FullRecipe from './templates/FullRecipe.vue';
import Profile from './templates/Profile.vue';
import Register from './containers/Register.vue';
import Login from './containers/Login.vue';

Vue.use(Router);

<<<<<<< HEAD
export default new Router({
=======
const router = new Router({
  mode: 'history',
>>>>>>> refactor
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
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: '', 
          name: 'profile',
          component: Profile
        },
        {
          path: 'recipes',
          component: UserHome
        },
        {
          path: 'full-recipe',
          name: 'fullRecipe',
          component: FullRecipe
        }
      ]
    },
  ],
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