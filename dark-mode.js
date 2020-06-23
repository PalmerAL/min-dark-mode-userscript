// ==UserScript==
// @name Dark Mode
// @match *
// @run-at document-start
// ==/UserScript==

var style = document.createElement('style')

style.textContent = `
  html {
    background-color: #ddd;
    filter: hue-rotate(180deg) invert(100%) !important;
  }
  body {
    margin: 0;
    background-color: #ddd;
    /* twitter.com */
    min-height: 100vh;
  }
  
  iframe, img, video, canvas {
  filter: hue-rotate(180deg) invert(100%) !important;
  }
  `

document.head.appendChild(style)
