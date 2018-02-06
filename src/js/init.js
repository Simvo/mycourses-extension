//jshint esversion: 6

var url = window.location;

let devMode = !('update_url' in chrome.runtime.getManifest());
let devlog = ( devMode ? console.log.bind(window.console) : function(){} );
devlog("MyCourses Extension Dev mode is ON");


devlog(url);
if (url.hostname === "mycourses2.mcgill.ca") {
	if (url.pathname.match(/\/d2l\/lms\/dropbox\/user\/folders_list\.d2l/)) {	
		addToCalendar();
	}
	if (url.pathname.match(/\/d2l\/home/)) {	
		calendarShortcut();
	}
}