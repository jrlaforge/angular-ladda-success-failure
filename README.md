# angular-ladda

An angular directive wrapper for Ladda.

Fork of angular-ladda-with-success

Adding success and failure button

Add this to your styles : 

```css
.ladda-success
  .ladda-label
	.glyphicon-ok {
	  display:inline-block !important; //overrides default inline style
	}

.ladda-remove
  .ladda-label
	.glyphicon-remove {
	  display:inline-block !important; //overrides default inline style
	}
```

To add error icon after loading

```javascript
    $scope.btn_error = false;
    $scope[loadingBtn] = false;
```

To add success icon after loading

```javascript
    $scope.btn_error = true;
    $scope[loadingBtn] = false;
```


[Check out the demo page.](http://remotty.github.io/angular-ladda)


## Getting started

(1) Get angular-ladda via [Bower](http://bower.io/)

```sh
$ bower install angular-ladda
```
or add bower.json
```sh
$ bower install angular-ladda --save
```

(2) add css & javascript link to html

```html
...
<link rel="stylesheet" href="bower_components/ladda/dist/ladda-themeless.min.css">
...
<script src="bower_components/ladda/js/spin.js"></script>
<script src="bower_components/ladda/js/ladda.js"></script>
<script src="bower_components/angular-ladda/dist/angular-ladda.min.js"></script>
...
```

(3) add `'angular-ladda'` to your main module's list of dependencies

```javascript
var myApp = angular.module('myApp', ['angular-ladda']);
```

(4) enjoy!

## Quick example

### controller

```javascript
  $scope.login = function() {
    // start loading
    $scope.loginLoading = true;
    loginService.login(function() {
      // stop loading
      $scope.loginLoading = false;
    });
  }
```

### view

basic

```html
<button ladda="loginLoading" ng-click="login()">
  Login
</button>
```

change style of effect

```html
<button ladda="loginLoading" ng-click="login()" data-style="expand-left">
  Login
</button>
```

change size of spinner

```html
<button ladda="loginLoading" ng-click="login()" data-size="l">
  Login
</button>
```

change color of spinner

```html
<button ladda="loginLoading" ng-click="login()" data-spinner-color="#FF0000">
  Login
</button>
```

## Add success indicator

````css
.ladda-success {
  .ladda-label {
	.glyphicon {
	  display:inline-block !important; //overrides default inline style
	}
  }
}
````

## Links

* [Ladda](http://lab.hakim.se/ladda/)

## Contributing

1. Fork it ( https://github.com/remotty/angular-ladda/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
