/**
 * root.js
 * 以视图的唯一DOM加载所需脚本
 */
define( function ( require, exports, module ) {
    var $ = require('jquery-debug');

    // 使用jqueryUI
    // ------------
    // var jui = require('undefined-debug');
    // jui('#input').datepicker();
    
    // 使用脚手架
    var scaffold = require('undefined-debug');

    // 栅格系统示意图，16格960系统
    scaffold.makeGrid( 40, 16, 20 );

    // 方便使用console调试
    window.sca = scaffold;

    // 加载 IE 模块
    if ( $.browser.msie ) {
        require.async('module/ie/ie');
    }

    // 示例
    // index.html
    if ( $("#main").attr('view') === 'index' ) {
        require.async('module/index');
    }
    // END 示例

}); // END root.js