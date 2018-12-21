import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Cookbook from './templates/Cookbook.vue';
import MealPlans from './templates/MealPlans.vue';
import Search from './templates/Search.vue';
import Shared from './templates/Shared.vue';
import UserHome from './templates/UserHome.vue';
import WeekPlan from './templates/WeekPlan.vue';
import HomePage from './pages/HomePage.vue';
import AboutUs from './templates/AboutUs.vue';
import SignUpIn from './templates/SignUpIn.vue';
import AppInfo from './templates/AppInfo.vue';
import Pricing from './templates/Pricing.vue';
import FullRecipe from './templates/FullRecipe.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/',
          component: SignUpIn
        },
        {
          path: '/login',
          component: SignUpIn
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
          name: 'userHome',
          component: UserHome
        },
        {
          path: 'home',
          component: UserHome
        },
        {
          path: 'search',
          component: Search
        },
        {
          path: 'my-cookbook',
          component: Cookbook
        },
        {
          path: 'shared',
          component: Shared
        },
        {
          path: 'week-plan',
          component: WeekPlan
        },
        {
          path: 'meal-plans',
          component: MealPlans
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
