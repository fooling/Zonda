// util.module.js
// --------------
// 模块工具函数

define(function ( require, exports, module ) {

    var $ = require('jquery');

    // IE debug
    if ( $.browser.msie ) {
        require.async('./ie');
    }

    // API
    module.exports = {
        verify         : require('src/util/verify.module'),
        route          : require('src/util/route.module'),
        dialog         : require('src/util/dialog.module'),
        StateMachine   : require('src/util/state.machine.module'),
        gif            : require('src/util/gif.module'),
        rightClickMenu : require('src/util/right.click.menu.module'),
        ajax           : require('src/util/ajax.module')
    };

});
