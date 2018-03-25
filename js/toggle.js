$(document).ready(function(){
  $(window).load(function() {  document.getElementById("StrongerText").style.display = "none"; });
  $(window).load(function() {  document.getElementById("BusRideText").style.display = "none"; });
  $(window).load(function() {  document.getElementById("DCText").style.display = "none"; });
  $(window).load(function() {  document.getElementById("GainesvilleText").style.display = "none"; });
  $(window).load(function() {  document.getElementById("PodcastText").style.display = "none"; });
  $(window).load(function() {  document.getElementById("MultimediaText").style.display = "none"; });


  $('a#Stronger').click(function(e) {
    $('div.text').hide();
    $('div.nut').hide();
    $('div#map').hide();
    $('div#mapstatic').hide();
    $('p#maptext').hide();
    $('div#StrongerText').show();
  });
  $('a#BusRide').click(function(e) {
    $('div.text').hide();
    $('div.nut').hide();
    $('div#map').hide();
    $('div#mapstatic').hide();
    $('p#maptext').hide();
    $('div#BusRideText').show();
    });
  $('a#DC').click(function(e) {
    $('div.text').hide();
    $('div.nut').hide();
    $('div#map').hide();
    $('div#mapstatic').hide();
    $('p#maptext').hide();
    $('div#DCText').show();
    });
  $('a#Gainesville').click(function(e) {
    $('div.text').hide();
    $('div.nut').hide();
    $('div#map').hide();
    $('div#mapstatic').hide();
    $('p#maptext').hide();
    $('div#GainesvilleText').show();
  });
  $('a#Podcast').click(function(e) {
    $('div.text').hide();
    $('div.nut').hide();
    $('div#map').hide();
    $('div#mapstatic').hide();
    $('p#maptext').hide();
    $('div#PodcastText').show();
  });
  $('a#Multimedia').click(function(e) {
    $('div.text').hide();
    $('div.nut').hide();
    $('div#map').hide();
    $('div#mapstatic').hide();
    $('p#maptext').hide();
    $('div#MultimediaText').show();
  });


});
