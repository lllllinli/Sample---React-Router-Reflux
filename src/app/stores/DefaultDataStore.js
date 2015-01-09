/**
 * Created by apple on 14/12/25.
 */
'use strict';

var Reflux = require('reflux'),
    DefaultDataStore;


var actions=Reflux.createActions(['disarmBomb','saveHostage','recoverData']);




DefaultDataStore = Reflux.createStore({
    init: function() {
        console.log(this.joinTrailing);
        this.joinLeading(actions.disarmBomb, actions.saveHostage, actions.recoverData, this.joinLeadingHandler);
        this.joinTrailing(actions.disarmBomb, actions.saveHostage, actions.recoverData, this.joinTrailingHandler);
    }
    ,
    joinLeadingHandler:function(data1,data2,data3){
        console.log(data1,data2,data3);
    }
    ,
    joinTrailingHandler:function(data1,data2,data3){
        console.log(data1,data2,data3);
    }
});


actions.disarmBomb('1');
actions.saveHostage('2');
actions.recoverData('3');








module.exports = DefaultDataStore;
