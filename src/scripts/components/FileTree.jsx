/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var RBootstrap = require('react/bootstrap');

var Panel = RBootstrap.Panel,
    TabbedArea = RBootstrap.TabbedArea,
    TabPane = RBootstrap.TabPane;


var FilesStore = require('ide/stores/FilesStore');
var FileTreeActions = require('ide/actions/FileTree');

var StoreWatchMixin = require('ide/lib/StoreWatchMixin');

module.exports = React.createClass({
  mixins: [StoreWatchMixin(FilesStore)],

  render: function() {
    return (
      <Panel header={"File tree"} bsStyle="info">
        <button className="btn btn-primary" onClick={this.handleClick}>Click me!</button>
        {this.getText()}
      </Panel>
    );
  },

  handleClick: function() {
    FileTreeActions.testAction();
  },

  getText: function() {
    return FilesStore.getText();
  }
});
