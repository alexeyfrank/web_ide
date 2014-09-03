var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;


var CHANGE_EVENT = 'change';

var Store = {};
_.extend(Store, EventEmitter.prototype);

_.extend(Store, {
  _handlers: {},

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatchAction: function(payload){
    var actionType = payload.actionType;
    var cb = this._handlers[actionType];

    if (typeof cb == 'function') {
      cb.call(this, payload.params);
      return true;
    }

    return false;
  },

  registerHandler: function(actionType, cb) {
    this._handlers[actionType] = cb;
  },

  extend: function(options) {
    return _.extend({}, Store, options);
  }
});


module.exports = Store;
