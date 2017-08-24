import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import AccountsList from '@/components/Accounts/List'
import AccountsCreate from '@/components/Accounts/Create'
import AccountsView from '@/components/Accounts/View'
import AccountsEdit from '@/components/Accounts/Edit'

import LoginForm from '@/components/Login/Form'

import BankList from '@/components/Banks/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contas',
      name: 'AccountsList',
      component: AccountsList
    },
    {
      path: '/contas/novo',
      name: 'AccountsCreate',
      component: AccountsCreate
    },
    {
      path: '/contas/:id',
      name: 'AccountsView',
      component: AccountsView
    },
    {
      path: '/contas/:id/editar',
      name: 'AccountsEdit',
      component: AccountsEdit
    },
    {
      path: '/bancos',
      name: 'BankList',
      component: BankList
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    }
  ]
})
