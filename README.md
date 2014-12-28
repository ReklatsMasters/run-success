run-success
===========
[![travis](https://travis-ci.org/ReklatsMasters/run-success.svg)](https://travis-ci.org/ReklatsMasters/run-success)
[![npm](https://img.shields.io/npm/v/run-success.svg)](https://npmjs.org/package/run-success) 
[![license](https://img.shields.io/npm/l/run-success.svg)](https://npmjs.org/package/run-success) 
[![downloads](https://img.shields.io/npm/dm/run-success.svg)](https://npmjs.org/package/run-success)
[![Code Climate](https://codeclimate.com/github/ReklatsMasters/run-success/badges/gpa.svg)](https://codeclimate.com/github/ReklatsMasters/run-success)

Runs the task until it doesn't come to the end successfully

##usage 

```js
var success = require('run-success');
var request = require('request');

var task = function(cb) {
	request('http://example.com', function(err, response){
		if (err) {
			return cb(err);
		}

		cb(null, response);
	});
}

success(task, {count:10}, function(err, resp){
	if (err) {
		// epic fail
	}

	// do some
});
```
