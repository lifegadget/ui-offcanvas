import Ember from 'ember';
import layout from '../templates/components/nav-button';

export default Ember.Component.extend({
    layout: layout,
    classNames: ['ui-fire-nav'],
    toggleSwitch: true,
  
    click: function() {
        let switcher = this.get('toggleSwitch');
        let $selector = this.$().parents().find('inner-wrap');
        if(switcher) {
            $selector.addClass('animated revealLeft');      
        } else {
            $selector.addClass('animated concealLeft');
        }
        this.toggleProperty('toggleSwitch');
        $selector.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
            if($selector.hasClass('revealLeft') && $selector.hasClass('concealLeft')) {
                $selector.removeClass('animated revealLeft concealLeft');                
            }
        });
    
        console.log('supposedly did it');
        this.sendAction();
    }

});
