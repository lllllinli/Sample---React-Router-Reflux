/**
 * Created by apple on 14/12/25.
 */
'use strict';

var Reflux = require('reflux'),
    ParallelStore;

// (source) http://spoike.ghost.io/reflux-0-1-6-now-with-a-better-waitfor/
// 合併多個 Actions 或 Stores


var Action = Reflux.createActions(['add', 'edit', 'delete', 'modify']);

// mixin 的方式加入
var MyStoreNixin = {
    setData:function(data){
        this.data=data;
    }
};
var Store = Reflux.createStore({
    mixins:[MyStoreNixin],
    init:function(){
        /* 可以在這裡預設資料 */
        this.data={name:'linli'};
        //console.log('create Store');
        this.listenTo(Action.delete,this.deleteHandler);
    },
    deleteHandler:function(msg){
        console.log('deleteHandler',msg);
        this.trigger(msg);
    },
    getData:function(){return this.data}
});
//
Store.setData({name:'StandLin'});
///* 可靜態取得資料 */
//console.log(Store.getData());


// Reflux.all 可以合併多個 Action 和 Store
var theTide =Reflux.all(Action.add,Action.edit,Store);

ParallelStore = Reflux.createStore({
    data: {},
    // Initial setup
    init: function () {
        // 初始化自動執行一次
        //console.log('ParallelStore init');

        this.listenTo(theTide, this.handler);

    },
    // Callback
    handler: function (msg1,msg2,msg3) {
        console.log('ParallelStore handler',msg1,msg2,msg3);

    }

});

//Action.add('1');
//Action.edit('2');
//Action.delete('3');

module.exports = ParallelStore;
