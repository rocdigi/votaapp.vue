import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/editperson/:id/',
    name: 'EditPerson',
    component: () => import(/* webpackChunkName: "Editar EditPerson" */ '../views/EditPerson.vue')
  },
  {
    path: '/secret',
    name: 'Secret',
    component: () => import(/* webpackChunkName: "Secret" */ '../views/Secret.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'Persons',
        component: () => import(/* webpackChunkName: "Persons" */ '../views/Persons.vue'),
      },      
    ]
  },
  {
    path: '/questions',
    name: 'Questions',
    component: () => import(/* webpackChunkName: "Questions" */ '../views/Questions.vue')
  },
  {
    path: '/question/create',
    name: 'QuestionCreate',
    component: () => import(/* webpackChunkName: "QuestionCreate" */ '../views/QuestionCreate.vue')
  },
  {
    path: '/questions/:id',
    name: 'QuestionUpdate',
    component: () => import(/* webpackChunkName: "QuestionsUpdate" */ '../views/QuestionUpdate.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isLogged = store.state.auth.isLogged;
  if(to.path === '/login' && isLogged){
    return next('/secret');
  }
  if(requiresAuth && !isLogged){
    next('/login');
  }else{
    next();
  }
})

export default router
