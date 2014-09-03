'use strict';

describe('Main', function () {
  var WebIdeApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WebIdeApp = require('../../../src/scripts/components/WebIdeApp.jsx');
    component = WebIdeApp();
  });

  it('should create a new instance of WebIdeApp', function () {
    expect(component).toBeDefined();
  });
});
