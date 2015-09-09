$(document).ready(function() {
  var apiData = {};
  $.ajax({
    url: 'http://localhost:3000/api',
    datatype: "JSON",
    type: 'get',
    success: function(data) {
      apiData = data;
      $('#main').append("Note: " +apiData.note + "</p><p>Message: " + apiData.message + "</p>");
    },
    error: function(err) {
      console.log('oops');
    }
  });




});
