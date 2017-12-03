var rows = document.querySelectorAll("#z_b > tbody > tr > th.d_ich");


console.log("Script is running!");


var head = document.getElementsByTagName('head')[0];

var script = document.createElement('script');

script.type = 'text/javascript';
script.src = 'https://addevent.com/libs/atc/1.6.1/atc.min.js';



head.appendChild(script);

for(i = 0; i < rows.length; i++){
	rows[0].parentElement.
}

// <div title="Add to Calendar" class="addeventatc">
//     Add to Calendar
//     <span class="start">12/08/2017 08:00 AM</span>
//     <span class="end">12/08/2017 10:00 AM</span>
//     <span class="title">Summary of the event</span>
//     <span class="description">Description of the event</span>
//     <span class="location">Location of the event</span>
// </div>

function createButton(i){
	let div = document.createElement('div');
	div.title = 'Button';
	div.class = 'addeventatc';

	let spanStart = document.createElement('span');
	spanStart.class = ''
}