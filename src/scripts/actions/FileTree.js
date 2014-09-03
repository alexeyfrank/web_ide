var AppDispatcher = require('ide/dispatcher/AppDispatcher');
var FileTreeConstants = require('ide/constants/FileTree');


module.exports = {
  testAction: function() {
    AppDispatcher.handleAction(FileTreeConstants.TEST_ACTION, { text: "New cool text!" });
  }
};
