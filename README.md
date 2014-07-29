# [gulp](https://github.com/wearefractal/gulp)-angular-htmlify
using angular-html5 from  https://github.com/pgilad/angular-html5

> Change your ng-attributes to data-ng-attributes for HTML5 validation

Ever tried to run an Angular HTML page into w3c validator? Yeah it's a mess.

The solution everyone recommends is to add `data` to all your `ng` directives.
Now with `gulp` this can be easily made part of your build flow, similar to how
ng-min is to creating minifiable Angular syntax.

**Turn this:**
```html
<html ng-app="myApp">
...
<body ng-controller="MainCtrl">
</body>
</html>
```

**Into this:**
```html
<html data-ng-app="myApp">
...
<body data-ng-controller="MainCtrl">
</body>
</html>
```
#### <img src="http://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" alt="HTML5 Valid" width="64" height="64"/>

**grunt-angular-htmlify** looks for `ng-` directives by default and can handle the following cases:
```html
<!-- attribute -->
<ANY ng-directive>
<!-- regular element -->
<ng-directive></ng-directive>
<!-- self closing element -->
<ng-directive />
<!-- custom directive prefix -->
<ui-router></ui-router>
<!-- your name prefix -->
<gilad-cool-loader></gilad-cool-loader>
```

You can add additional prefixes using the option `customPrefixes`.

This plugin plays nice with `type="text/ng-template"` and won't break it.

*Issues with the output should be reported on the [angular-html5 issue tracker](https://github.com/pgilad/angular-html5/issues).*

## Install

Install with [npm](https://npmjs.org/package/grunt-angular-htmlify)

```
npm install --save-dev grunt-angular-htmlify
```

## Example

```js
   'angular-htmlify': {
      dist: {
        customPrefixes: ['ui-'],
        files: [{
          expand: true,
          cwd: 'app/',
          src: '{,**/}*.{html,htm}',
          dest: '.tmp/'
        }]
      }
    }
```

#### customPrefixes

Type: `Array`

An array to optionally add custom prefixes to the list of converted directives.

For example: `['ui-', 'em-']`

By default only `ng-` prefixes are are handled. Any items you add here will be handled as well.

*Note: for this to work - you will need to make sure your directives can load with a `data-` prefix.*

Defaults to `[ ]`


## License

MIT ©2014 **Costica Puntaru**