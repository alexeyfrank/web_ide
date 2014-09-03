var AppDispatcher = require('ide/dispatcher/AppDispatcher');
var FileTreeConstants = require('ide/constants/FileTree');
var BaseStore = require('ide/lib/Store');


var text = "Hello!";

var FilesStore = BaseStore.extend({
  getText: function() {
    return text;
  }
});

FilesStore.registerHandler(FileTreeConstants.TEST_ACTION, function(newText) {
  text = newText;
  this.emitChange();
});

module.exports = FilesStore;
