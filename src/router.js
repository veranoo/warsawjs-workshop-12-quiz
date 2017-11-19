import Vue from 'vue'
import Router from 'vue-router'

import Intro from './components/Intro.vue'
import RulesView from './components/RulesView.vue'
import NarrowLayout from './components/NarrowLayout.vue'
import WonWin from './components/WonView.vue'
import LostView from './components/LostView.vue'
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
        },
        {
          path: '/win',
          component: WonWin,
          name: 'win'
        },
        {
          path: '/lost',
          component: LostView,
          name: 'lost'
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
