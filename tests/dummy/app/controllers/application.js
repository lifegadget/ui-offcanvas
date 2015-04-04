import Ember from 'ember';

export default Ember.Controller.extend({
  
  showNavigation: true,
  navLinks: [
    {name: 'Home', action: 'goHome'},
    {name: 'About', action: 'goAbout'},
    {name: 'Foo', action: 'goFoo'},
    {name: 'Bar', action: 'goBar'}
  ],
  actions: {
    navToggle: function() {
      console.log('made it');
    },
  }
  
});