//jshint esversion: 6
devlog(url);
if (url.hostname === "mycourses2.mcgill.ca") {
	if (url.pathname.match(/\/d2l\/lms\/dropbox\/user\/folders_list\.d2l/)) {
		console.log("Executing addToCalendar.js");		
		addToCalendar();
	}
}

function addToCalendar() {

	//Gets each row
	let rows = document.querySelectorAll("#z_b > tbody > tr > th.d_ich");
	let titles = document.querySelectorAll('#z_b > tbody > tr:nth-child(n) > th > div.dco.d2l-foldername > div');
	let dates = document.querySelectorAll('.d_gt:last-child');

	let topRow = document.querySelector('#z_b > tbody > tr.d_ggl2.d_dbold > td');
	let header = document.querySelector('#z_b > tbody > tr.d_gh');

	extendTopRow();
	addButtonsToRows();

	function addButtonsToRows(){
		for(i = 0; i < rows.length; i++){
			rows[i].parentElement.appendChild(createButton(i));
		}
		addCalendarButtonHandler();
	}

	function extendTopRow(){
		topRow.setAttribute('colspan', topRow.getAttribute('colspan')+1);

		let headerTab = document.createElement('th');
		headerTab.setAttribute('scope', 'col');
		headerTab.setAttribute('class', 'd_hch d_gc');
		headerTab.innerHTML = 'Export';

		header.appendChild(headerTab);
	}

	function createButton(i){
		let td = document.createElement('td');
		td.className = 'd_gc d_gt';

		let dropdownDiv = document.createElement('div');
		dropdownDiv.className = 'dropdown';

		let button = document.createElement('button');
		button.onclick = function() {showFields(i);};

		button.className = 'dropbtn';
		button.innerHTML = 'Add To Calendar';

		let dropdownContent = document.createElement('div');
		dropdownContent.className = 'dropdown-content';
		dropdownContent.setAttribute('id', 'calendarDropdown-' + i);

		let startDate = new Date();
		let endDate = new Date();

		if(dates[i].lastChild.length != 1){
			startDate = new Date(dates[i].lastChild.innerHTML);
			endDate = new Date(dates[i].lastChild.innerHTML);
		}

		startDate.setHours(startDate.getHours() - 1);

		let calendarValues = createCalendar({
			options: {
				class: 'assignmentButton'
			},
			data: {
				title: titles[i].firstChild.innerHTML,
				start: startDate,
				end: endDate
			}
		});

		Object.keys(calendarValues).forEach(function(services){
			dropdownContent.innerHTML += calendarValues[services];
		});

		dropdownDiv.appendChild(button);
		dropdownDiv.appendChild(dropdownContent);

		td.appendChild(dropdownDiv);

		return td;

	}

	function showFields(i){
		document.getElementById('calendarDropdown-' + i).classList.toggle("show");
	}

	function addCalendarButtonHandler() {
		window.onclick = function(event) {
			if (!event.target.matches('.dropbtn')) {

				var dropdowns = document.getElementsByClassName("dropdown-content");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
				}
			}
		};
	}

}