require('remodal/dist/remodal.css');
require('remodal/dist/remodal-default-theme.css');

var $ = require('jquery');

require('imports?define=>false!remodal');

module.exports = {
    bind: function () {
        var _this = this;

        _this.instanse = $(_this.el).remodal({
            hashTracking: false
        });

        if (!_this.vm.$modals) {
            _this.vm.$modals = {};
        }

        _this.vm.$modals[_this.expression] = _this.instanse;
    },
    unbind: function () {
        var _this = this;

        _this.instance.destroy();
        delete _this.vm.$modals[_this.expression];
    }
};