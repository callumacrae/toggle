# toggle [![Build Status](https://travis-ci.org/callumacrae/toggle.svg)](https://travis-ci.org/callumacrae/toggle)

A tiny toggle library powered by jQuery and data attributes.

## Install

```
$ npm install --save toggle
```

And add the following to a JavaScript somewhere:

```js
require('toggle');
```

## Usage


The library is powered by data attributes. You have toggle targets, and toggle
controls: when a toggle control is clicked, the toggle targets will have their
visibility changed.

To create a toggle target, give it a `data-toggle-name` attribute:

```html
<p data-toggle-name="foobar">This will be toggled.</p>
```

Then, to create a toggle control to toggle the visiblity of that element, give
an element a `data-toggle-target` attribute:

```html
<a data-toggle-target="foobar">Toggle visiblity</a>
```

You can also prepend `show:` and `hide:` to the target to show and hide it:

```html
<a data-toggle-target="show:foobar">Show foobar</a>
<a data-toggle-target="hide:foobar">Hide foobar</a>
```

If you want to be really verbose, you can use `toggle:` for targets to be
toggled. You can specify multiple targets by separating them with a space:

```html
<a data-toggle-target="one two show:three hide:four">Show and hide some stuff</a>
```

### Changing how things are toggled

These are the default toggle handlers:

```js
var toggles = module.exports = {
	toggle: function ($element) {
		$element.toggle();
	},
	hide: function ($element) {
		$element.hide();
	},
	show: function ($element) {
		$element.show();
	}
};
```

Sometimes that isn't suitable, e.g. if you want to remove a "hidden" class.
You can override them by require-ing the module and adjusting the handlers:

```js
var toggle = require('toggle');

toggle.toggle = function ($element) {
	$element.toggleClass('hidden');
};

toggle.hide = function ($element) {
	$element.addClass('hidden');
};

toggle.show = function ($element) {
	$element.removeClass('hidden');
};
```

Note that this will change the handlers everywhere in your project. You're
using classes consistently though, right?


## License

This library is released under the MIT license.
