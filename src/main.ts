import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// 插件的样式和指令需要独立注册
import "element-plus/es/components/message/style";
import { ElLoading } from "element-plus";
import "element-plus/es/components/loading/style";
app.use(router);
app.use(ElLoading);

app.mount("#app");
