import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/sneat/vendor/fonts/boxicons.css";
import "./assets/sneat/vendor/css/core.css";
import "./assets/sneat/vendor/css/pages/page-auth.css";
import "./assets/sneat/vendor/css/theme-default.css";
import "./assets/sneat/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "./assets/sneat/vendor/js/helpers.js";
import "./assets/sneat/js/config.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
