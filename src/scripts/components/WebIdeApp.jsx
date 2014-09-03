/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var RBootstrap = require('react/bootstrap');

var TabbedArea = RBootstrap.TabbedArea,
    TabPane = RBootstrap.TabPane;

var FileTree = require('ide/components/FileTree.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="main row">
        <div className="col-xs-6 col-md-4">
          <FileTree />
        </div>
        <div className="col-xs-12 col-md-8">
          <TabbedArea defaultActiveKey={1}>
            <TabPane key={1} tab="Tab 1">TabPane 1 content</TabPane>
            <TabPane key={2} tab="Tab 2">TabPane 2 content</TabPane>
          </TabbedArea>
        </div>
      </div>
    );
  }
});
