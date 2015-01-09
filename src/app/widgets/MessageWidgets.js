/** @jsx React.DOM */

'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


var MessageWidgets = React.createClass({
    mixins: [Router.State],
    getTab01:function(){},
    render: function () {

        return (
            /*jshint ignore:start */
            <div>這是：{this.getParams().messageId}</div>
            /*jshint ignore:end */
        );
    }
});




module.exports = MessageWidgets;
