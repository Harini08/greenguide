 $(document).ready(function(){

//$('[data-slidepanel]').slidepanel({
//    orientation: 'top',
//     mode: 'push'
//   });


// $('.collapse').collapse('hide');
var browseCategories = $('#browse-categories');
  browseCategories.animate({'margin-left':'-172px'});

var panel1 = $('#home-sidebar');
  panel1.hide();
  panel1.animate({'margin-left':'0px'});

  $('#slide-panel').on('click', function() {
    var panel = $('#home-sidebar');
    var browseCategories = $('#browse-categories');

    if (panel.hasClass("visible")) {
      panel.removeClass('visible').animate({'margin-left':'-300px'});
      browseCategories.animate({'margin-left':'-172px'});
    } else {
      panel.show();
      panel.addClass('visible').animate({'margin-left':'0px'});
      browseCategories.animate({'margin-left':'-30px'});
    }

    return false;
  });
});


//Do display inline for the sidebar panel to move it next to the other panel.
