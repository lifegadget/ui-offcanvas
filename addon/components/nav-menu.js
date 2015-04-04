import Ember from 'ember';
import layout from '../templates/components/nav-menu';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ui-offcanvas'],
  menuVisible: false  
});
