'use strict';

var _ = require('lodash');
var Dispatcher = require('ide/lib/Dispatcher');

var BaseDispatcher = new Dispatcher();

var AppDispatcher = _.extend(BaseDispatcher, {

  handleAction: function(name, params) {
    this.dispatch({
      actionType: name,
      params: params || {}
    });
  },

  registerStore: function(Store) {
    this.register(function(payload) {
      Store.dispatchAction(payload);
    });
  },

  registerStores: function(stores) {
    _.map(stores, function(store) {
      this.registerStore(store);
    }, this);
  }
});


module.exports = AppDispatcher;
