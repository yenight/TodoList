import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from './../components/Main'
import TodoList from './../components/TodoList'
import Home from './../components/Home'

Vue.use(VueRouter)

const routes = [
    {path: '/main', component: Main},
    {path: '/todo', component: TodoList},
    {path: '/home', component: Home}
]

const router = new VueRouter({
    routes
})

export default router