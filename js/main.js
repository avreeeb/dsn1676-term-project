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

$tabs.on('click', 'a', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');

  $panels.filter(':not([hidden])').attr('hidden', true);
  $(id).removeAttr('hidden');

  $tabs.find('.js-current').removeClass('js-current');
  $(this).addClass('js-current');
});
	