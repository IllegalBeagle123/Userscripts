// ==UserScript==
// @name         Auto Archiver
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatically saves blocked sites with web.archive.com.
// @author       Dylan Barrett
// @match        http://*/internetaccessnotice*.html*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const url = urlParams.get('URL')
    window.location.replace("https://web.archive.org/save/" + url)
})();
