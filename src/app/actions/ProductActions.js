'use strict';

// 3 party API include
var Reflux = require('reflux'),

    // Custom module include
    ProductAPI = require('../services/OverviewService'),

    // variable
    ProductActions;


// Todo
// 1. create 多個 Actions
// 2. 以物件表示，Action 的主從關係

ProductActions = Reflux.createActions({
    "load": {
        children: ["completed", "failed","onLoadStart"]}
});

// Todo
// 1. 偵聽主要的 Action
// 2. AJAX API，

ProductActions.load.listen(function () {

    ProductAPI
        .loadAll()
        .then(this.completed,this.failed);
});


module.exports = ProductActions;
