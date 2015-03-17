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

var $theCircle = $('.circle');
var $moveDownButton = $('.move-down');
var $moveUpButton = $('.move-up');
var $moveLeftButton = $('.move-left');
var $moveRightButton = $('.move-right');
var $form = $('form');
var $input = $('#the-color');


//$theCircle.addClass('circle-border');

$moveDownButton.on('click', function () {
	var currentLocation = $theCircle.offset();
console.log(currentLocation);
	$theCircle.css('top', currentLocation.top + 10);
});

$moveUpButton.on('click', function () {
	var currentLocation = $theCircle.offset();
console.log(currentLocation);
	$theCircle.css('top', currentLocation.top - 10);
});

$moveLeftButton.on('click', function () {
	var currentLocation = $theCircle.offset();
console.log(currentLocation);
	$theCircle.css('left', currentLocation.left - 10);
});


$moveRightButton.on('click', function () {
	var currentLocation = $theCircle.offset();
console.log(currentLocation);
	$theCircle.css('left', currentLocation.left + 10);
});

