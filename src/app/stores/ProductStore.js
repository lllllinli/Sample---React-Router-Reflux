/**
 * Created by apple on 15/1/8.
 */
'use strict';

var Reflux = require('reflux');
var ProductActions = require('../actions/ProductActions');

var ProductStore = Reflux.createStore({
    init: function () {
        this.Data = {};
        //
        this.listenTo(ProductActions.load, this.onLoad);
        this.listenTo(ProductActions.load.completed, this.onLoadCompleted);
        this.listenTo(ProductActions.load.failed, this.onLoadFailed);
    },
    onLoad: function () {
        console.log('>> ProductStore onload : 總是被執行。');
        // product load started
        this.trigger({
            actionType: 'load'
        });
    },
    onLoadCompleted: function (product) {
        console.log('>> ProductStore onLoadCompleted : 下載成功。', product);
        this.trigger({
            actionType: 'onLoadCompleted',
            data: product
        });
    },
    onLoadFailed: function (err) {
        console.log('>> ProductStore onLoadFailed : 下載失敗。', err);

    }
});

module.exports = ProductStore;
