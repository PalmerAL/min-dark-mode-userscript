// ==UserScript==
// @name Dark Mode
// @match *
// @run-at document-start
// ==/UserScript==

var style = document.createElement('style')

style.textContent = `
  html {
    background-color: #000 !important;
    background-image:none !important;
  }
  body {
    background-color: #000 !important;
    /* twitter.com */
    min-height: 100vh;
    background-image:none !important;
  }
  header, nav, div, span, pre, h1, h2, h3, blockquote, table, tr, th, td, article, section, textarea {
    background-color: #000 !important;
    background-image:none !important;
    color: #ddd !important;
  }
  p, li, span, pre, code, blockquote, td, b, i, u {
    color: #ddd !important;
    background: none !important;
  }
  a {
    color: #E87E65 !important;
    text-decoration: underline !important;
    background: none !important;
  }
  
  iframe, img, video, canvas {
    filter: brightness(0.5) contrast(1.5) !important;
  }
  `

document.head.appendChild(style)
