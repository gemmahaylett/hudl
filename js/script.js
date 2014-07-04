$(document).ready(function() {

  $('#gradeFilter li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#gradeFilter li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#roster').children('div.item').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('#roster').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#roster').children('div.' + ourClass).show();
    }
    return true;
  });

  $('#seasonFilter li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#seasonFilter li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#roster').children('div.item').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('#roster').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#roster').children('div.' + ourClass).show();
    }
    return true;
  });

  $('#positionFilter li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#positionFilter li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#roster').children('div.item').show();
    }
    else {
      // hide all elements that don't share ourClass
      $('#roster').children('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#roster').children('div.' + ourClass).show();
    }
    return true;
  });

  $('.inactive').change(function(){
    if(this.checked) {
      $('#roster').children('div.inactive').hide();
    }
    else{
      $('#roster').children('div.item').show();
    }
   });
   
  $('#list').click(function(event){
      event.preventDefault();
      $('#roster .item').addClass('list-group-item');
      $('#roster .collapse').addClass('in');
   });
    
  $('#grid').click(function(event){
      event.preventDefault();
      $('#roster .item').removeClass('list-group-item');
      $('#roster .item').addClass('grid-group-item');
      $('#roster .collapse').removeClass('in');
   });
    
});
