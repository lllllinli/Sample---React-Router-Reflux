/** @jsx React.DOM */

'use strict';
/*
* include
* */
var React = require('react');
var Router = require('react-router');
var Reflux=require('reflux');

/* React-Router */
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


/* React Component */
var Header = require('../views/Header');




/* Reflux Action */
var MainPageAction = require('../actions/MainPageAction');
var ClickAction=require('../actions/ClickAction');
var SynchronousAction=require('../actions/SynchronousAction');
/* Reflux Store */
var MenuStore = require('../stores/MenuStore');
var ProductStore=require('../stores/ProductStore');
var OverviewStore=require('../stores/OverviewStore');




var MainPage = React.createClass({

    // Custom Method
    initPageData: function () {
        //console.log('> initPageData。');
    },
    // 繼承的 React 物件
    mixins:[],
    // 客製可以讓外部呼叫 React Function
    // ex : MainPage.publicFun()
    statics:{
        publicFun:function(){
            console.log('call me');
        }
    },
    // 初始化 React 參數
    getInitialState: function () {
        return {menuData: {}};
    },
    propTypes:{

    },
    getDefaultProps:function(){
        return {};
    },
    /* Lifecycle Methods */
    /* React - Mounting 掛載流程 */
    componentWillMount: function () {
        this.initPageData();
    },
    componentDidMount: function () {

        // 發出 Action
        MainPageAction();
        //ProductActions.load();
        //SynchronousAction.loadAll();



        // 偵聽 Store
        this.unsubscribe = MenuStore.listen(this.onMenuStore);

    },
    onMenuStore: function (data) {

        if(data.dataType !='updateButton'){
            this.setState({menuData: data.data});
        }else{
            this.getDOMNode()
        }
    },
    // React - Updating 更新流程
    componentWillReceiveProps: function (nextProps) {

    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return true;
        /* need return true/false */
    },
    componentWillUpdate: function (nextProps, nextState) {
    },
    // React - Unmounting 卸載流程
    componentWillUnmount: function () {
        this.unsubscribe();
    },
    clickHandler:function(){
        // 發出 Action
        ClickAction();
    },
    render: function () {

        return (
            /*jshint ignore:start */
            <div className="Wrapper" ref="wee">
                {/* 將 state 資料存給 Header Component */}
                <Header menuData={this.state.menuData}></Header>
                <button onClick={this.clickHandler}>click me</button>
                <RouteHandler />
            </div>
            /*jshint ignore:end */
        );
    }
});

module.exports = MainPage;
