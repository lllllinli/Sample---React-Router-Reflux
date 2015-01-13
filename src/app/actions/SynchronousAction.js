/**
 * Created by apple on 15/1/7.
 */
'use strict';

var Reflux = require('reflux'),
    SynchronousAction;

var OverviewAPI=require('../services/OverviewService');


SynchronousAction = Reflux.createActions([
    'loadAll',
    'loadAllComplete'
]);


// 設定
SynchronousAction.loadAll.preEmit=function(){
    OverviewAPI.loadAll().then(SynchronousAction.loadAllComplete);
};


module.exports = SynchronousAction;
