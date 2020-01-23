import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Router from 'vue-router';
import AppBarComponent from './components/AppHeader';
import createInvoiceComponent from './components/Create-Invoice';


Vue.config.productionTip = false
Vue.use(Router)


const 
  routes = [
    {
        path: '/',
        redirect: {
            name: "Create-Invoice"
        }
    },
    {
        path: "/Create-Invoice",
        name: "Create-Invoice",
        component: createInvoiceComponent
    },
    {
        path: "/AppHeader",
        name: "AppHeader",
        component: AppBarComponent
    }
]
const router = new Router({
  routes // short for `routes: routes`
})
new Vue({
  vuetify,
  router
  ,
  render: h => h(App)
}).$mount('#app')

