export default function(){
  this.transition(
    this.hasClass('show-navigation'),
    this.use('to-right', {duration: 1000}),
    this.reverse('to-left', {duraction: 1000})
  );
};