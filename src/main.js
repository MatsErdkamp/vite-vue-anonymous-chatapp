import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import PrimeVue from 'primevue/config';

import Welcome from "./components/Welcome.vue";
import Login from "./components/Login.vue";
import Likert from "./components/Likert.vue";
import Questions from "./components/Questions.vue";
import Training from "./components/Training.vue";

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css



const routes = [{
        path: "/",
        name: "Welcome",
        component: Welcome,
    },
    {
        path: "/login/",
        name: "Login",
        component: Login,
    },
    {
        path: "/likert/",
        name: "Likert",
        component: Likert,
    },
    {
        path: "/questions/",
        name: "Questions",
        component: Questions,
    },
    {
        path: "/training/",
        name: "Training",
        component: Training,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App)


app.use(router)
app.use(PrimeVue);

import InputText from 'primevue/inputtext';
import ProgressSpinner from 'primevue/progressspinner';
app.component('InputText', InputText);
app.component('ProgressSpinner', ProgressSpinner);
app.mount('#app')