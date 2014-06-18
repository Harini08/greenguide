// $('.collapse').collapse('hide');

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(function () {
    $('#myTab a:first').tab('show')
  })
