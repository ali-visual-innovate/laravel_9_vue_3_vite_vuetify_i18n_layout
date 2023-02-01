import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";

// Vuetify
import i18n from "./plugins/i18n";
import vuetify from "./plugins/vuetify";

//import vueitfy icons
import "@mdi/font/css/materialdesignicons.css";


createApp(App)
    .use(createPinia())
    .use(i18n)
    .use(vuetify)
    .mount("#app");
