// JavaScript Document
/*
alert('Hello');
*/

var $menu = $('.menu');
var $panel = $('.panel');
var $tabs = $('.tabs');
var $panels = $('.tab-panel');

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box')

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

$menu.on('click', function () {
  $panel.toggleClass('js-panel-open');
});

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

$btnShowHide.on('click', function () {
    $box.toggleClass('js-box-dissappear');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-diamond-move');
});

$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce');
});

$circle.on('webkitAnimationEnd animationend', function () {
	console.log('fired');
    $circle.removeClass('js-circle-bounce');
});
	
