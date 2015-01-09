/** @jsx React.DOM */

'use strict';

var React = require('react');
var Router = require('react-router');

/* 需要 */
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Header;

Header = React.createClass({
    render: function () {
        // 非同步的關係，可能無值。
        var Menu = this.props.menuData.Menu||[];


        return (
            /*jshint ignore:start */
            <div>
                <header>
                    <div className="Menu">
                        <ul>
                        {Menu.map(function (result, i) {
                            return (<li key={i}>
                                <Link  to={result.path}>{result.pathName}</Link>
                            </li>);
                        })}
                        </ul>
                    </div>
                </header>
                    {/* this is the important part */}
            </div>
            /*jshint ignore:end */
        );
    }
});


module.exports = Header;
