/** @jsx React.DOM */
'use strict';

// 3 party API - Include
var React = require('react'),
    Router = require('react-router'),
    Reflux = require('reflux'),

// Variable Router
    Link = Router.Link,
    RouteHandler = Router.RouteHandler,


// Reflux Actions
    MainPageAction = require('../actions/MainPageAction'),
    ClickAction = require('../actions/ClickAction'),
    SynchronousAction = require('../actions/SynchronousAction'),
    ProductActions = require('../actions/ProductActions'),


// Reflux Stores
    MenuStore = require('../stores/MenuStore'),
    ProductStore = require('../stores/ProductStore'),
    OverviewStore = require('../stores/OverviewStore'),

    ParallelStore = require('../stores/ParallelStore'),
    DefaultDataStore = require('../stores/DefaultDataStore'),


// React Component - Include
    Header = require('../views/Header'),


// React Component
    MainPage;


MainPage = React.createClass({
    // LifeCycle
    mixins: [],
    propTypes: {},
    getDefaultProps: function () {
        return {};
    },
    getInitialState: function () {
        return {
            btnMsg: 0,
            routerHandlerClass: 'linliContent',
            menuData: {}
        };
    },
    componentWillMount: function () {
    },
    componentDidMount: function () {

        // 發出 Action

        // 基本 Action。
        MainPageAction();

        // 階層式 Action 。
        ProductActions.load();

        SynchronousAction.loadAll();

        // 偵聽 Store

        this.unsubscribeMenuStore = MenuStore.listen(this.onMenuStore);
        this.unsubscribeProductStore = ProductStore.listen(this.onProductStore);

    },
    componentWillReceiveProps: function (nextProps) {
    },
    componentWillUnmount: function () {
        // 移除 store 偵聽
        this.unsubscribeMenuStore();
        this.unsubscribeProductStore();
    },
    // Custom method
    onMenuStore: function (data) {
        if (data.dataType != 'updateButton') {
            this.setState({menuData: data.data});
        } else {
            this.state.btnMsg = this.state.btnMsg + 1;
            this.forceUpdate();
        }
    },
    onProductStore: function (result) {
        console.log(result.actionType);
    },
    clickHandler: function () {
        // 發出 Action
        ClickAction();
    },
    render: function () {

        return (
            /*jshint ignore:start */
            <div className="Wrapper" ref="w">
                {/* 將 state 資料存給 Header Component */}
                <Header menuData={this.state.menuData}></Header>
                <button onClick={this.clickHandler} ref="clickBtn">{this.state.btnMsg}</button>
                {/*  */}
                <RouteHandler {...this.state}/>
            </div>
            /*jshint ignore:end */
        );
    }
});

module.exports = MainPage;
