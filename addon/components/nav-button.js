import Ember from 'ember';
import layout from '../templates/components/nav-button';

export default Ember.Component.extend({
  layout: layout,
  
  click: function() {
    this.sendAction();
  }

});
