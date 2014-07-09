$(document).ready(function() {

/*-----------------------------------------------------------------------------------*/
/*  Dropdown cateogry filter code 
/*  Reference: http://www.evoluted.net/thinktank/web-development/jquery-filtering
/*-----------------------------------------------------------------------------------*/


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

  /*-----------------------------------------------------------------------------------*/
  /*  Grid/List view switch code 
  /*  Reference: www.bootsnip.com
  /*-----------------------------------------------------------------------------------*/

  $('#list').click(function(event){
      event.preventDefault();
      $('#roster .item').removeClass('grid-group-item');
      $('#roster .item').addClass('list-group-item');
      $('#roster .collapse').addClass('in');
      $('#roster .profile-layout-img').removeClass('col-md-12');
      $('#roster .profile-layout-img').addClass('col-md-1');
      $('#roster .profile-layout-header').removeClass('col-md-12');
      $('#roster .profile-layout-header').addClass('col-md-2');
      $('#roster .profile-layout-grade').removeClass('col-md-6');
      $('#roster .profile-layout-grade').addClass('col-md-1');
      $('#roster .profile-layout-position').removeClass('col-md-6');
      $('#roster .profile-layout-position').addClass('col-md-1');
      $('#roster .profile-layout-phone').removeClass('col-md-12');
      $('#roster .profile-layout-phone').addClass('col-md-2');
      $('#roster .profile-layout-email').removeClass('col-md-12');
      $('#roster .profile-layout-email').addClass('col-md-2');
      $('#roster .profile-layout-video').removeClass('col-md-12');
      $('#roster .profile-layout-video').addClass('col-md-2');
      $('#roster .profile-layout-btn').removeClass('col-md-12');
      $('#roster .profile-layout-btn').addClass('col-md-1');
      $('#roster .player-btn').removeClass('btn-group-justified');
   });
    
  $('#grid').click(function(event){
      event.preventDefault();
      $('#roster .item').removeClass('list-group-item');
      $('#roster .item').addClass('grid-group-item');
      $('#roster .collapse').removeClass('in');
      $('#roster .profile-layout-img').removeClass('col-md-1');
      $('#roster .profile-layout-img').addClass('col-md-12');
      $('#roster .profile-layout-header').removeClass('col-md-2');
      $('#roster .profile-layout-header').addClass('col-md-12');
      $('#roster .profile-layout-grade').removeClass('col-md-1');
      $('#roster .profile-layout-grade').addClass('col-md-6');
      $('#roster .profile-layout-position').removeClass('col-md-1');
      $('#roster .profile-layout-position').addClass('col-md-6');
      $('#roster .profile-layout-phone').removeClass('col-md-2');
      $('#roster .profile-layout-phone').addClass('col-md-12');
      $('#roster .profile-layout-email').removeClass('col-md-2');
      $('#roster .profile-layout-email').addClass('col-md-12');
      $('#roster .profile-layout-video').removeClass('col-md-2');
      $('#roster .profile-layout-video').addClass('col-md-12');
      $('#roster .profile-layout-btn').removeClass('col-md-1');
      $('#roster .profile-layout-btn').addClass('col-md-12');
      $('#roster .player-btn').addClass('btn-group-justified');
   });

  /*-----------------------------------------------------------------------------------*/
  /*  Expand/Collapse icon switch code
  /*-----------------------------------------------------------------------------------*/

  $('#gen-info').click(function(event){
    event.preventDefault();
    var classList = $('#add-athlete .info-sec-icon').attr('class').split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
       if (classList[i] === 'glyphicon-plus-sign') {
         $('#add-athlete .info-sec-icon').removeClass('glyphicon-plus-sign');
         $('#add-athlete .info-sec-icon').addClass('glyphicon-minus-sign');
       }
       else{
         $('#add-athlete .info-sec-icon').removeClass('glyphicon-minus-sign');
         $('#add-athlete .info-sec-icon').addClass('glyphicon-plus-sign');
       }
    }
      
  });

  $('#contact-info').click(function(event){
    event.preventDefault();
    var classList = $('#add-athlete .contact-info-icon').attr('class').split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
       if (classList[i] === 'glyphicon-plus-sign') {
         $('#add-athlete .contact-info-icon').removeClass('glyphicon-plus-sign');
         $('#add-athlete .contact-info-icon').addClass('glyphicon-minus-sign');
       }
       else{
         $('#add-athlete .contact-info-icon').removeClass('glyphicon-minus-sign');
         $('#add-athlete .contact-info-icon').addClass('glyphicon-plus-sign');
       }
    }
      
  });

  $('#parent-info').click(function(event){
    event.preventDefault();
    var classList = $('#add-athlete .parent-info-icon').attr('class').split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
       if (classList[i] === 'glyphicon-plus-sign') {
         $('#add-athlete .parent-info-icon').removeClass('glyphicon-plus-sign');
         $('#add-athlete .parent-info-icon').addClass('glyphicon-minus-sign');
       }
       else{
         $('#add-athlete .parent-info-icon').removeClass('glyphicon-minus-sign');
         $('#add-athlete .parent-info-icon').addClass('glyphicon-plus-sign');
       }
    }
      
  });

  $('#additional-info').click(function(event){
    event.preventDefault();
    var classList = $('#add-athlete .additional-icon').attr('class').split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
       if (classList[i] === 'glyphicon-plus-sign') {
         $('#add-athlete .additional-icon').removeClass('glyphicon-plus-sign');
         $('#add-athlete .additional-icon').addClass('glyphicon-minus-sign');
       }
       else{
         $('#add-athlete .additional-icon').removeClass('glyphicon-minus-sign');
         $('#add-athlete .additional-icon').addClass('glyphicon-plus-sign');
       }
    }
      
  });
    
});
