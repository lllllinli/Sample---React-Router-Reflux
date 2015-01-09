/**
 * Created by apple on 14/12/25.
 */
'use strict';

var Reflux = require('reflux'),
    MainPageAction = require('../actions/MainPageAction'),
    MenuStore,
    MenuService = require('../services/MenuService'),
    ClickAction = require('../actions/ClickAction');


MenuStore = Reflux.createStore({
    data: {},
    // Initial setup
    init: function () {
        // 初始化自動執行一次
        console.log('MenuStore init');

        this.listenTo(MainPageAction, this.MainPageActionHandler);
        this.listenTo(ClickAction, this.handleClick);
    },
    // Callback
    MainPageActionHandler: function () {

        var that = this;

        console.log('MainPageActionHandler');

        var p = MenuService();

        p.done(function (result) {
            console.log('ajax', result);
            that.trigger({
                dataType: 'updateData',
                data: result
            });

        });


    },
    handleClick: function () {
        console.log('click Me');
        this.trigger({
            dataType: 'updateButton',
            data: 'hi'
        });
    }
});

module.exports = MenuStore;
