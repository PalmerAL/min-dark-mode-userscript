# min-dark-mode-userscript

Hacked-up fork of 
[PalmerAL/min-darkmode-userscript](https://github.com/PalmerAL/min-dark-mode-userscript) to add a dark 
theme to any page in [Min](https://minbrowser.github.io/min).

The original wasn't working properly for me, so this was a desperate and rushed attempt to stave off 
an oncoming migraine.

The CSS overrides are just `#000` for a bunch of elements' `background` properties, `#ddd` for `color` 
properties, removing `background-image`, and using `filter` to reduce image brightness and increase 
contrast.

To install: 

* Enable userscripts in Min and create a `userscripts` folder following [these instructions](https://github.com/minbrowser/min/wiki/userscripts), and save `dark-mode.js` inside it.
* Restart Min. 
