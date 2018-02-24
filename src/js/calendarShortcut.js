//jshint esversion: 6

function calendarShortcut() {

	devlog("Executing calendarShortcut.js");

	let calendarURL = '/d2l/le/calendar/6606';
	if (!url.pathname.match(/\/d2l\/home$/)) {
		calendarURL = document.getElementsByClassName('d2l-homepage-heading-link')[1].href;
	}

	let calendarLinkDiv = document.createElement('div');
	calendarLinkDiv.className = 'd2l-navigation-s-item';
	calendarLinkDiv.setAttribute('role', 'listitem');

	let calendarLink = document.createElement('a');
	calendarLink.className = 'd2l-navigation-s-link';
	calendarLink.href = calendarURL;
	calendarLink.innerText = 'Calendar';
	calendarLinkDiv.appendChild(calendarLink);

	let navigationWrapper = document.getElementsByClassName('d2l-navigation-s-main-wrapper')[0];
	navigationWrapper.insertBefore(calendarLinkDiv, navigationWrapper.firstChild);

}