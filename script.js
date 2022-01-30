const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

$(document).ready(function () {
  $(".navbar-nav > a").click(function (e) {
   $(".navbar-nav > a").removeClass("active");
   $(this).addClass("active");
    });
});