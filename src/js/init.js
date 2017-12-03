var url = window.location.href;

let devMode = !('update_url' in chrome.runtime.getManifest());
let logForDebug = ( devMode ? console.log.bind(window.console) : function(){} );
logForDebug("MyCourses Extension Debug mode is ON");