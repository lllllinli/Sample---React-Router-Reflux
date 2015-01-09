/** @jsx React.DOM */

'use strict';

var React = require('react');
var Reflux = require('reflux');


var CalendarPages = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query) {

            console.log('進入 CalendarPages  頁面。');

            // 回到上一頁，阻檔進入本頁
            // transition.abort();

            // redirect 頁面。
            //transition.redirect('inbox','',{id:'123'},function(){
            //    console.log('inbox page')
            //});

            //transition.wait();


        },
        willTransitionFrom: function (transition, component) {

            console.log('離開 CalendarPages  頁面。');
            console.log(component);
        }
    },
    getInitialState: function () {
        console.log("> getInitialState()");
        return {user: 'AndyYou'};
    },
    componentWillMount: function () {
        console.log("> componentWillMount()");
    },
    componentDidMount: function (node) {

        this.setState({user: 'Calvert'});

        console.log("> componentDidMount(node)");
        //console.log(node.className);
        //console.log('value:'+node.value);
        //console.log(node.id);
        console.log(this.getDOMNode().className);
        console.log(this.getDOMNode().value);
        console.log(this.getDOMNode().id);
    },
    componentWillReceiveProps: function (nextProps) {
        console.log("> componentWillReceiveProps(nextProps)");
        console.log(nextProps);
    },
    clickHandler: function (e) {
        console.dir(e);
        console.dir(e.target);
        console.log(e.target.value);

        //this.setState({user: e.target.value});
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log("> shouldComponentUpdate(nextProps, nextState)");
        console.log("nextProps: ");
        console.log(nextProps);
        console.log("nextState: ");
        console.log(nextState);
        return true;
        /* need return true/false */
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log("> componentWillUpdate(nextProps, nextState)");
    },
    componentWillUnmount: function () {
        console.log("> componentWillUnmount()");
    },
    render: function () {

        return (
            /*jshint ignore:start */
            <div   className={"linli"} id="linliid">
                <h1 >CalendarPages</h1>
                <button onClick={this.clickHandler} value={'linli'} >Click Me</button>
            </div>
            /*jshint ignore:end */
        );
    }
});

module.exports = CalendarPages;
