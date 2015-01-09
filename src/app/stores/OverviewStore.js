/**
 * Created by apple on 15/1/8.
 */
'use strict';

var Reflux = require('reflux');
var SynchronousAction = require('../actions/SynchronousAction');
var OverviewStore;

OverviewStore = Reflux.createStore({

    init: function () {
        console.log('OverviewStore');
        this.listenTo(SynchronousAction.loadAllComplete, this.onLoadAll);
    },
    getDefaultData: function () {
        return {
            "title":"總攬",
            "items":{
                "unit":["指標","門店","會員"]
            }
        }
    },
    onLoadAll: function (data) {
        console.log('> loadAllComplete:', data);
        this.trigger();

    }
});




module.exports = OverviewStore;


