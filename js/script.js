var main = function() {

  $("#show_portfolio").hide();
  $("#show_aboutme").hide();
  $("#show_media").hide();
  $("#show_contact").hide();


  $("#portfolio").on('click', function() {
    $("#show_portfolio").fadeIn("slow");
    $("#show_aboutme").hide();
    $("#show_media").hide();
    $("#show_contact").hide();
  });

  $("#aboutme").on('click', function() {
    $("#show_portfolio").hide();
    $("#show_aboutme").fadeIn("slow");
    $("#show_media").hide();
    $("#show_contact").hide();
  });

  $("#follow").on('click', function() {
    $("#show_portfolio").hide();
    $("#show_aboutme").hide();
    $("#show_media").fadeIn("slow");
    $("#show_contact").hide();
  });
  $("#contact").on('click', function() {
    $("#show_contact").fadeIn("slow");
    $("#show_aboutme").hide();
    $("#show_portfolio").hide();
    $("#show_media").hide();
  });
};

$(document).ready(main);
