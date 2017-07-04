// Add active class to top navigation
$(function() {
  $('nav ul li a[href^="' + location.pathname.split("/")[1] + '"]').addClass('active');
});
