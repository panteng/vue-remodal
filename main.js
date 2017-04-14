(function () {
    'use strict';

    var Vue = require('vue');

    // vue config
    Vue.config.debug = true;

    // register directives
    Vue.directive('remodal', require('./directives/remodal'));

    // app setup
    var App = new Vue({
        el: '#app',
        methods: {
            openModal: function () {
                var vm = this;
                vm.$modals.demoModal.open();
            }
        }
    });

})();