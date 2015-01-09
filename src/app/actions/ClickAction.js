/**
 * Created by apple on 15/1/7.
 */
'use strict';

var Reflux = require('reflux'),
    ClickAction;

ClickAction = Reflux.createAction([
    'add',
    'edit',
    'delete',
    'update'
]);

module.exports = ClickAction;
