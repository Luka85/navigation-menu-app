import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import Dropdown from "./components/Navbar.vue";

const app = createApp(App);
app.component("navbar", Navbar);
app.component("dropdown", Dropdown);
app.mount("#app");
