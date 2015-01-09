/** @jsx React.DOM */

'use strict';
/**
 *
 * @type {*|exports}
 */
var React = require('react');
var Router = require('react-router');

/**
 *
 * @type {exports.Route|*}
 */
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Redirect=Router.Redirect;


/**
 *
 * @type {page:React component}
 */
var InboxPage = require('./pages/InboxPage');
var InboxPageStats = require('./pages/InboxPageStats');
var CalendarPages = require('./pages/CalendarPages');
var DashboardPage = require('./pages/DashboardPage');
var MainPage = require('./pages/MainPage');
var MessageWidgets = require('./widgets/MessageWidgets');

var NotFoundPage=require('./pages/NotFoundPage');
var InboxNotFoundPage=require('./pages/InboxNotFoundPage');



var Routes = (
    /*jshint ignore:start */
    <Route name="app" path="/" handler={MainPage}>
        <Route name="inbox" handler={InboxPage}>
            <Route name="message" path=":messageId" handler={MessageWidgets}/>
            <DefaultRoute handler={InboxPageStats}/>
            <NotFoundRoute handler={InboxNotFoundPage}/>
        </Route>
        <Route name="calendar" handler={CalendarPages}/>
        <DefaultRoute handler={DashboardPage}/>
        <NotFoundRoute handler={NotFoundPage} />
    </Route>
    /*jshint ignore:end */
);



Router.run(Routes, function (Handler, state) {

    var params = state.params;

    /*jshint ignore:start */
    React.render(<Handler params={params}/>, document.body);
    /*jshint ignore:end */
});








