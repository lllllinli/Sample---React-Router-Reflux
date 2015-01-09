/**
 * Created by apple on 15/1/8.
 */

'use strict';

var Reflux = require('reflux');

/**
 * 單一 Action
 *
 */


var singleAction = Reflux.createAction();

// 執行 Action

singleAction();

//singleAction.trigger();
//singleAction.triggerAsync();

/**
 * 一次建立多筆
 *
 * Multiple Actions
 *
 */

var MultipleActions = Reflux.createActions([
    "statusUpdate",
    "statusEdited",
    "statusAdded"
]);


// 執行

MultipleActions.statusUpdate();
MultipleActions.statusEdited();
MultipleActions.statusAdded();

/**
 * Asynchronous Action 非同步 Action
 */

var AsynActions = Reflux.createActions({
    childrend: ["completed", "failed"]

});

// 等於

var AsynActions = Reflux.createActions({
    asyncResult: true,
    children: ["progressed"]
});


AsynActions.load.listen(function () {

    var promise = $.ajax();

    promise
        .then(this.completed)
        .catch(this.failed);

});




