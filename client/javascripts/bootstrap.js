
/* global app, $on */
((window) => {
  'use strict'

  window.onload = function() {
  	console.log('WE IN THIS THANG BREH!!!');

  	require('../stylesheets/style.css');
  }

  let x = 99;
  // $on(window, 'load', app.onLoad)
  // $on(window, 'hashchange', app.onLoad)
})(window);