// ==UserScript==
// @name         Education Perfect Focus
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stops Education Perfect from checking if the tab is focused.
// @author       Dylan Barrett
// @match        *www.educationperfect.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.hasfocus = function(){ return true; };
})();
