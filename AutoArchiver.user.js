// ==UserScript==
// @name         Auto Archiver
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Automatically saves blocked sites with web.archive.com.
// @author       Dylan Barrett
// @match        http://*/internetaccessnotice*.html*
// @match        https://web.archive.org/web/*/*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const url = urlParams.get('URL')
    if(urlParams.get('URL') != null){
        window.location.replace("https://web.archive.org/save/" + url)
    }
    if(document.getElementById("error")!=null){
        window.location.replace("https://web.archive.org/save/" + document.getElementsByName("url_preload")[0].value)
    }
})();
