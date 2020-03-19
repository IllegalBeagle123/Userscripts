// ==UserScript==
// @name         Auto Archiver
// @namespace    https://github.com/IllegalBeagle123/Userscripts/
// @version      0.5
// @description  Automatically saves blocked sites with web.archive.com.
// @author       Dylan Barrett
// @match        *fdc-edugw-cf04.ed.act.edu.au/*
// @match        *web.archive.org/web/*
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    try{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const url = urlParams.get('URL')
        if(urlParams.get('URL') != null){
            window.location.replace("https://web.archive.org/save/" + url)
        }
        if(document.getElementById("error") != null){
            window.location.replace("https://web.archive.org/save/" + document.getElementsByName("url_preload")[0].value)
        }
        if(document.forms[0] != undefined){
            window.location.replace("https://web.archive.org/save/" + document.forms[0].INPUT_URL_AUTH.value)
        }
    }
    catch(error){
        if(error != "TypeError: Cannot read property 'value' of undefined"){
            alert("An error has occured: " + error)
        }
    }
})();
