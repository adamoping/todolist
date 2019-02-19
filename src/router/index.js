import Vue from 'vue'
import Router from 'vue-router'
import TodoItem from '@/components/TodoItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoItem',
      component: TodoItem
    }
  ]
})
