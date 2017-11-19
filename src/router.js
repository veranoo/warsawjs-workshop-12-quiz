import Vue from 'vue'
import Router from 'vue-router'

import Intro from './components/Intro.vue'
import RulesView from './components/RulesView.vue'
import NarrowLayout from './components/NarrowLayout.vue'
import PlayView from './components/PlayView.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: NarrowLayout,
      children: [
        {
          path: '/',
          component: Intro,
          name: 'intro',
        },
        {
          path: '/rules',
          component: RulesView,
          name: 'rules'
        }
      ]
    },
    {
      path: '/play',
      component: PlayView,
      name: 'play'
    }
  ]
});
