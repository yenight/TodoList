import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from './../components/Main'
import TodoList from './../components/TodoList'
import Home from './../components/Home'
import myInfo from './../components/MyInformation'

Vue.use(VueRouter)

const routes = [
    {path: '/main', name: 'main', component: Main},
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {path: '/todo', name: 'todo', component: TodoList},
            {path: '/myInfo', name: 'myInfo', component: myInfo}
        ],
        redirect: '/todo'
    }
]

const router = new VueRouter({
    routes
})

export default router