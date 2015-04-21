// JavaScript Document
/*
alert('Hello');
*/

var $menu = $('.menu');
var $panel = $('.panel');
var $tabs = $('.tabs');
var $panels = $('.tab-panel');

$menu.on('click', function () {
  $panel.toggleClass('js-panel-open');
});

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

$btnShowHide.on('click', function () {
    $box.toggleClass('js-box-dissappear');
});

var $btnShowHide = $('.btn-show-hide-2');
var $box2 = $('.box2');

$btnShowHide.on('click', function () {
    $box2.toggleClass('js-box2-dissappear');
});

var $btnShowHide = $('.btn-show-hide-3');
var $box3 = $('.box3');

$btnShowHide.on('click', function () {
    $box3.toggleClass('js-box3-dissappear');
});

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});

var $form = $('form');
var $input = $('#the-color');


//$theCircle.addClass('circle-border');

$moveDownButton.on('click', function () {
	$theCircle.css('js-circle-dissappear');
});


$('.nav').localScroll();
$('.top').localScroll();

var $lightSection = $('.light');

$lightSection.waypoint(function () {
	$lightSection.toggleClass('js-active');
},{offset:"60%"});
