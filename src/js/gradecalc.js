function gradeCalc(){

	devlog("Executing gradeCalc.js");

	let gradeLabels=document.querySelectorAll('d_hch d_gr');
	let rows=document.querySelectorAll('d_gd');
	
	function extendRows(){
		rows.setAttribute('rowspan',rows.getAttribute('rowspan')+1);
	}
	function addButton(){
		rows.parentElement.appendChild(createButton('rowspan'));

	}
	function getAverageGrade(){
		for(let i=0; i<gradeLabels.length; i++){
		console.log(gradeLabels[i].innerText);
	}

	}

}




calculateAverageGrade();