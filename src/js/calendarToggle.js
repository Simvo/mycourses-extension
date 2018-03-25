function calendarToggle() {
	
	
		devlog("Executing calendarToggle.js");

		function getCalenderStatus(callback){
		var calenderStatus="";
		chrome.storage.sync.get('calender', function (obj) {
		calenderStatus = obj.calender;
		callback(calenderStatus);
		});
	}

		function toggle(calenderStatus){
			if(calenderStatus){
		let collapsedContents = document.getElementsByClassName("d2l-collapsepane-header");;
    	let childrens = collapsedContents[0].children[0].children[0];
    	childrens.click();
    }
}

getCalenderStatus(toggle);
}