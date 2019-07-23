import VueRouter from 'vue-router'
import Vue from 'vue'
import Main from './../components/Main'
import TodoList from './../components/TodoList'
import Home from './../components/Home'
import myInfo from './../components/MyInformation'

Vue.use(VueRouter)

const routes = [
    {path: '/main', component: Main},
    {
        path: '/home',
        component: Home,
        children: [
            {path: '/todo', component: TodoList},
            {path: '/myInfo', component: myInfo}
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router