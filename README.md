# min-dark-mode-userscript
Adds a dark theme to any page in [Min](https://minbrowser.github.io/min).

To install: 

* Follow [these instructions](https://github.com/minbrowser/min/wiki/userscripts) to create a userscript.
* Copy the contents of this repository's `global.js` file into your own `global.js`.

### Options
(at the top of the global.js file):

* `enabledByDefault`: whether dark mode should be used on sites that are not explicitly blocked or allowed.
* `blockedSites`: prevents this script from running on certain sites.
* `allowedSites`: enables dark mode on the listed sites if `enabledByDefault` is false.