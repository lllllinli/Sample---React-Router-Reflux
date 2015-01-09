/** @jsx React.DOM */

'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var MessageWidgets = require('../widgets/MessageWidgets');
var ToolbarWidgets = require('../widgets/ToolbarWidgets');


var NotFoundPage = React.createClass({
    render: function () {
        return (
            /*jshint ignore:start */
            <div>
                <h1>NotFound Page</h1>
            </div>
            /*jshint ignore:end */
        );
    }
});


module.exports = NotFoundPage;
