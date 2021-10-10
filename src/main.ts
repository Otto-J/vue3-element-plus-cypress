import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import "element-plus/es/components/message/style";
app.use(router);

app.mount("#app");
