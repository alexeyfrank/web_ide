var _ = require('lodash');

module.exports = function() {
  var stores = Array.prototype.slice.call(arguments);

  return {

    componentWillMount: function() {
      this.callback = this.forceUpdate.bind(this);

      _.each(stores, function(store) {
        store.addChangeListener(this.callback);
      }, this);
    },

    componentWillUnmount: function() {
      _.each(stores, function(store) {
        store.removeChangeListener(this.callback);
      }, this);

      this.callback = null;
    },
  }
}
