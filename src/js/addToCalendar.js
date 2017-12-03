
console.log("Executing addToCalendar.js");



// function injectScript(scriptSrc) {
// 	var head = document.getElementsByTagName('head')[0];

// 	var script = document.createElement('script');

// 	script.type = 'text/javascript';
// 	script.src = scriptSrc;
// 	head.appendChild(script);
// }

// injectScript('https://addevent.com/libs/atc/1.6.1/atc.min.js');

var rows = document.querySelectorAll("#z_b > tbody > tr > th.d_ich");
var titles = document.querySelectorAll('#z_b > tbody > tr:nth-child(n) > th > div.dco.d2l-foldername > div');
var dates = document.querySelectorAll('.d_gt:last-child label');

var topRow = document.querySelector('#z_b > tbody > tr.d_ggl2.d_dbold > td');
var header = document.querySelector('#z_b > tbody > tr.d_gh');
extendTopRow();

addButtonsToRows();


function addButtonsToRows(){
	for(i = 0; i < rows.length; i++){
		rows[i].parentElement.appendChild(createButton(i));
	}
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
	button.onclick = function() {showFields(i)};

	button.className = 'dropbtn';
	button.innerHTML = 'Add To Calendar';

	let dropdownContent = document.createElement('div');
	dropdownContent.className = 'dropdown-content';
	dropdownContent.setAttribute('id', 'calendarDropdown-' + i);

	let startDate = new Date(dates[i].innerHTML);
	startDate.setHours(startDate.getHours() - 1);

	let calendarValues = createCalendar({
		options: {
			class: 'assignmentButton'
		},
		data: {
			title: titles[i].firstChild.innerHTML,

			start: startDate,

			end: new Date(dates[i].innerHTML)

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
}


function properDateFormat(date) {
  year = "" + date.getFullYear();

  month = "" + (date.getMonth() + 1); 
  if (month.length == 1) { 
  	month = "0" + month; 

  }

  day = "" + date.getDate(); 
  if (day.length == 1) { 
  	day = "0" + day; 
  }
  hour = "" + date.getHours(); 
  if (hour.length == 1) { 
  	hour = "0" + hour; 
  }

  minute = "" + date.getMinutes(); 
  if (minute.length == 1) { 
  	minute = "0" + minute; 
  }

  return year + "-" + month + "-" + day + " " + hour + ":" + minute;
}
