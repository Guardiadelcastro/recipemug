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

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recipe Mug',
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
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '', 
          component: UserHome
        },
        {
          path: 'home',
          name: 'home',
          component: UserHome
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'my-cookbook',
          name: 'cookbook',
          component: Cookbook
        },
        {
          path: 'shared',
          name: 'shared with me',
          component: Shared
        },
        {
          path: 'week-plan',
          name: 'week plan',
          component: WeekPlan
        },
        {
          path: 'meal-plans',
          name: 'meal plans',
          component: MealPlans
        },
      ]
    },
  ],
});
