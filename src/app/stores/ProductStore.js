/**
 * Created by apple on 15/1/8.
 */
'use strict';

var Reflux = require('reflux');
var ProductActions = require('../actions/ProductActions');

var ProductStore = Reflux.createStore({
    init: function() {
        this.Data={};
        //
        //this.listenToMany(ProductActions,this.onLoad);
        this.listenTo(ProductActions.load.completed,this.onLoadCompleted);
        this.listenTo(ProductActions.load.failed,this.onLoadFailed);
    },
    onLoad: function(){
        console.log('onload');
        // product load started
    },
    onLoadCompleted: function(product){
        console.log('>>onLoadCompleted',product);

    },
    onLoadFailed:function(){

    }
});

module.exports = ProductStore;
