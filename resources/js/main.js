/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import '../sass/main.scss'

import { createApp } from "vue";
// import App from "./App.vue";

import pinia from "./stores/store";
// Vuetify
import i18n from "./plugins/i18n";
import vuetify from "./plugins/vuetify";

//import vueitfy icons
import "@mdi/font/css/materialdesignicons.css";

// const app = createApp(App)
const app = createApp({})

app.use(pinia)
app.use(i18n)
app.use(vuetify)
app.mount("#app");
