/* jshint node: true */
'use strict';

var path = require('path');
var funnel = require('broccoli-funnel');

module.exports = {
  name: 'ui-offcanvas',
  
  included: function() {
    console.log('ui-offcanvas');
  },
  
  // treeForStyles: function(){
  //   var enhancedTree = new funnel('vendor/ui-offcanvas', {
  //     srcDir: '/',
  //     destDir: '/app/styles'
  //   });
  //   return enhancedTree;
  // }
};
