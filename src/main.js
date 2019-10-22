import { baseUrl } from "@/utils";
import axios from "axios";
import Vue from "vue";
import App from "@/pages/index/App";
import { router } from "@/pages/index/router";
import store from "@/store";

import "bpmn-js/dist/assets/diagram-js.css";
// import '@bpmn/bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "@bpmn/custom/app.css";
import "@bpmn/custom/custom-panel/custom.css";
import "ant-design-vue/dist/antd.less";
import "@/assets/font/iconfont.css";
import "@bpmn/diagram/style/style.less";

// 组件
import message from "ant-design-vue/lib/message";
import Form from "ant-design-vue/lib/form";
import Icon from "ant-design-vue/lib/icon";
import Row from "ant-design-vue/lib/row";
import Col from "ant-design-vue/lib/col";
import Input from "ant-design-vue/lib/input";
import Button from "ant-design-vue/lib/button";
import Modal from "ant-design-vue/lib/modal";

Vue.use(Icon);
Vue.use(Form);
Vue.use(Col);
Vue.use(Row);
Vue.use(Input);
Vue.use(Button);
Vue.use(Modal);
Vue.prototype.$message = message;

Vue.prototype.bus = new Vue();
Vue.config.productionTip = false;

Vue.prototype.$baseUrl = baseUrl;
Vue.prototype.$axios = axios;

new Vue({
  el: "#root",
  router,
  store,
  components: { App },
  template: "<App/>"
});
