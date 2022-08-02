import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

import "./assets/sneat/vendor/fonts/boxicons.css";
import "./assets/sneat/vendor/css/core.css";
import "./assets/main.css";
import "./assets/sneat/vendor/css/pages/page-auth.css";
import "./assets/sneat/vendor/css/theme-default.css";
import "./assets/sneat/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "./assets/sneat/vendor/libs/jquery/jquery.js";
import "./assets/sneat/vendor/libs/popper/popper.js";
import "./assets/sneat/vendor/js/bootstrap.js";
import "./assets/sneat/vendor/js/helpers.js";
import "./assets/sneat/js/config.js";
import "./assets/sneat/vendor/js/menu.js";
import "./assets/sneat/vendor/js/helpers.js";

const app = createApp(App);

app.use(VCalendar, {})
app.use(createPinia());
app.use(router);
app.mount("#app");
