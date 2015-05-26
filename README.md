# ractive-component-toggle
Ractive component wrapping bootstrap toggle widget:  http://www.bootstraptoggle.com/

### Installation
```
$ npm instamm ractive-component-toggle
```

Note that to use this plugin you must have
[Ractive](http://docs.ractivejs.org/latest/get-started) (either via `<script src="...">` or
bundled using e.g. browserify)
and [bootstrap](http://getbootstrap.com/getting-started/) styles available.
### Usage

Please look at `demo.html` for usage example.

Basically you use the `<Toggle/>` tag in your template and configure it
using the following attributes:

* `value`
Specifies the variable containing the state of toggle.
* `texton` (default: 'On')
Text displayed when toggle is on.
* `textoff` (default: 'Off')
Text displayed when toggle is off.
* `size` (default: 'normal')
One of predefined sizes (the same as in original [bootstraptoggle](http://www.bootstraptoggle.com/)):
'large', 'normal', 'small', 'mini'.
* `styleon` (default: 'btn-primary')
CSS class applied to the `texton` label.
* `styleoff` (default: 'btn-default')
CSS class applied to the `texton` label.
* `handle` (default: 'btn-default')
CSS class applied to handle.
* `custom_style`
CSS string put into the `style` attribute of wrapping `<div>`.
Allows to make toggle wider if your label is too long for instance.

### License
MIT
