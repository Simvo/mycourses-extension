//jshint esversion: 6

var url = new URL(window.location.href);

let devMode = !('update_url' in chrome.runtime.getManifest());
let devlog = ( devMode ? console.log.bind(window.console) : function(){} );
devlog("MyCourses Extension Dev mode is ON");



