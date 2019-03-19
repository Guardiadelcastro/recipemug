import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import UserHome from './templates/UserHome.vue';
import HomePage from './pages/HomePage.vue';
import AboutUs from './templates/AboutUs.vue';
import AppInfo from './templates/AppInfo.vue';
import Pricing from './templates/Pricing.vue';
import FullRecipe from './templates/FullRecipe.vue';
import Profile from './templates/Profile.vue';
import Register from './containers/Register.vue';
import Login from './containers/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/',
          component: Login
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
          component: Pricing
        },
        {
          path:'/about',
          component: AboutUs
        },
        {
          path:'/info',
          component: AppInfo
        }
      ]
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
