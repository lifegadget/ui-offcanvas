import Ember from 'ember';
import layout from '../templates/components/nav-menu';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['ui-fire-nav'],
  menuVisible: false  
});
