import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
import "@/permission"; // permission control

import { Message } from "element-ui";
import { iget, ipost, upload } from "@/utils/api";
Vue.prototype.$post = ipost;
Vue.prototype.$get = iget;
Vue.prototype.$upload = upload;
Vue.prototype.success = Message.success;
Vue.prototype.error = Message.error;
Vue.prototype.info = Message.info;

// copy
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.prototype.NProgress = NProgress;

// lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 50
})

// element-ui
Vue.directive('focus', function (el) {
    el.querySelector('input').focus()
})

import { VueMasonryPlugin } from "vue-masonry";
Vue.use(VueMasonryPlugin);

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from "../mock";
// if (process.env.NODE_ENV === "production") {
//     mockXHR();
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App)
});
