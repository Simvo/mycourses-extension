function calendarToggle(){
    devlog("Executing calendarToggle.js");

    let collapsedContents = document.getElementsByClassName("d2l-collapsepane-header");;
    let childrens = collapsedContents[0].children[0].children[0];
          childrens.click();
}