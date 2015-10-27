
window.Vue = require('vue');
window.VueRouter = require('vue-router');
require('vue-resource');
Vue.http.headers.common['X-AUTH-TOKEN'] = "";
var jQuery, $;

cookie = require('cookie-cutter');
jQuery = $ = require('jquery');
window.jQuery = jQuery;
window.$ = $;
require('./../node_modules/tablesaw/dist/tablesaw.js');
require('./../node_modules/jquery-autocomplete/jquery.autocomplete.js');
Vue.config.debug = true; // turn on debugging mode

window.config = {};
window.config.baseUrl = "";

var appVue = new Vue({
    created: function(){

    }
});

var router = new VueRouter();

router.map({
    "/": {
        name: 'welcome',
        component: {
            template: document.querySelector("#welcome-template"),
            data: function(){
                return {

                }
            },
            ready: function(){
                // get route param
                // this.item_id = this.$route.params.id;
            },
            methods: {

            }
        }
    },
    // parameterised route
    // "/item/:id": {

});


router.start(appVue, ".app");