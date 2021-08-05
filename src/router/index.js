import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile/Profile.vue'
import Createprofile from '../views/Profile/Createprofile.vue'
import Editprofile from '../views/Profile/Editprofile.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/createprofile',
        name: 'Createprofile',
        component: Createprofile
    },
    {
        path: '/editprofile',
        name: 'Editprofile',
        component: Editprofile
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router