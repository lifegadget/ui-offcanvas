/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/animate.css/animate.css');

app.import('vendor/ui-offcanvas/ui-offcanvas.css');

module.exports = app.toTree();
