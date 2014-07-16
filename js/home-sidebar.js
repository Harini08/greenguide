 $(document).ready(function(){

//$('[data-slidepanel]').slidepanel({
//    orientation: 'top',
//     mode: 'push'
//   });


// $('.collapse').collapse('hide');

  $('#slide-panel').on('click', function() {
    var panel = $('#home-sidebar');
    if (panel.hasClass("visible")) {
      panel.removeClass('visible').animate({'margin-left':'-300px'});
    } else {
      panel.addClass('visible').animate({'margin-left':'0px'});
    }
    return false;
  });
});


//Do display inline for the sidebar panel to move it next to the other panel.
