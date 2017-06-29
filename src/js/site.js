// Add active class to top navigation
$(document).ready(function() {

});
$(function() {
  $('nav ul li a[href^="' + location.pathname.split("/")[1] + '"]').addClass('active');
});
