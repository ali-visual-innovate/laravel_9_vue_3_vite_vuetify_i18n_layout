import "./bootstrap";

import { createApp } from "vue";
import App from "./App.vue";

import pinia from "./stores/store";
// Vuetify
import i18n from "./plugins/i18n";
import vuetify from "./plugins/vuetify";

//import vueitfy icons
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(vuetify)
app.mount("#app");
