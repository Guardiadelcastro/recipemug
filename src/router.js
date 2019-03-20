import Vue from 'vue';
import Router from 'vue-router';

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

export default new Router({
  mode: 'history',
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
