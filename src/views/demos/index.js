module.exports = {
    template: require('./template.html'),
    methods: {
        openModal: function () {
            var vm = this;
            vm.$modals.demoModal.open();
        }
    }
};