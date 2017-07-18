/** let count = 0; setInterval(()=>{ count++ % 2 ? console.log("what is that ?") : console.log("How to ？");  }, 100); */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../containers/Home.vue';
import Add from '../containers/Add.vue';
import List from '../containers/List.vue';
import Collect from '../containers/Collect.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
    },
    {
      path:'/add',
      component:Add
    },
    {
      path:'/list',
      component:List
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'*',
      redirect:'/home'
    }
  ],
  linkActiveClass:'active'
})
