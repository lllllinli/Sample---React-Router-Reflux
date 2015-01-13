/** @jsx React.DOM */

'use strict';

// 3 party API include
var React = require('react'),
    Router = require('react-router'),

    // Variable Router
    Routes,
    Route = Router.Route,
    NotFoundRoute = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    Redirect=Router.Redirect,

    // include React Component Page

    MainPage = require('./pages/MainPage'),
    InboxPage = require('./pages/InboxPage'),
    InboxPageStats = require('./pages/InboxPageStats'),
    CalendarPages = require('./pages/CalendarPages'),
    DashboardPage = require('./pages/DashboardPage'),

    MessageWidgets = require('./widgets/MessageWidgets'),

    // 設定 Router 404 頁。
    NotFoundPage=require('./pages/NotFoundPage'),
    InboxNotFoundPage=require('./pages/InboxNotFoundPage');



Routes = (
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








