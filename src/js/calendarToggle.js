function calendarToggle(){
    devlog("Executing calendarToggle.js");

    console.log("IM HERERE 1");
    let collapseWidgets = document.getElementsByClassName("d2l-collapsepane-header");
    // for (var i=0; i<collapseWidgets.length; i++){
        // console.log("HERR " + " " + collapseWidgets[0].classList);
         collapseWidgets[0].classList.remove("d2l-collapsepane-collapsed");
        // console.log("HERR " + " " + collapseWidgets[0].classList);
    // }

    let collapsedContents = document.getElementsByClassName("d2l-collapsepane-content");
     for (var i=0; i<collapseWidgets.length; i++){
        collapsedContents[i].classList.remove("d2l-hidden");
    }
}