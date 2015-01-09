/**
 * Created by apple on 15/1/7.
 */
'use strict';

var Reflux = require('reflux'),
    ProductActions;

var ProductAPI = require('../services/OverviewService');


ProductActions = Reflux.createActions({
    "load": {
        children: ["completed", "failed","onLoadStart"]}
});

ProductActions.load.listen(function () {

    ProductAPI
        .loadAll()
        .then(this.completed,this.failed);
});




module.exports = ProductActions;
