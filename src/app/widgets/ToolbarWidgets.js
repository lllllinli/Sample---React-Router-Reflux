/** @jsx React.DOM */

'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;






var ToolbarWidgets = React.createClass({
    render: function () {
        return (
            /*jshint ignore:start */
            <h1>ToolbarWidgets</h1>
            /*jshint ignore:end */
        );
    }
});




module.exports = ToolbarWidgets;
