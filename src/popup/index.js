import Vue from "vue";
import AppComponent from "./App/App.vue";
import {Button} from "element-ui";

Vue.component("app-component", AppComponent);
Vue.use(Button);
new Vue({
    el: "#app",
    render: createElement => {
        return createElement(AppComponent);
    }
});
