import Vue from 'vue' // vue
import App from './App.vue' // 내가 쓸 vue 파일

new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(App)
    }
})