/**
 * Created by apple on 14/12/25.
 */
'use strict';

var Reflux = require('reflux'),
    MainPageAction = require('../actions/MainPageAction'),
    MenuStore,
    MenuService = require('../services/MenuService'),
    ClickAction = require('../actions/ClickAction');


// 預設當 Store 被 create 時，init method 會自動被執行。
MenuStore = Reflux.createStore({
    data: {},
    // Initial setup
    init: function () {
        // 初始化自動執行一次

        // TODO 偵聽兩個 Action
        this.listenTo(MainPageAction, this.MainPageActionHandler);
        this.listenTo(ClickAction, this.handleClick);

    },
    // Callback
    MainPageActionHandler: function () {

        var that = this,
            promise = MenuService();

        promise.done(function (result) {
            that.trigger({
                dataType: 'updateData',
                data: result
            });
        });

    },
    handleClick: function () {

        this.trigger({
            dataType: 'updateButton',
            data: 'hi'
        });
    }
});

module.exports = MenuStore;
