'use strict';

/* global describe, it */

var success = require("../");
var should = require("should");

describe('base test', function(){
	it('without errors', function(done){
		var task = function(cb){
			cb();
		};

		success(task, function(err, succ){
			should(err).not.be.ok;
			(err === null).should.be.true;
			should(succ).be.a.type('undefined');
			done();
		});
	});

	it('without errors and with success data', function(done){
		var task = function(cb){
			cb(null, 20);
		};

		success(task, function(err, succ){
			should(err).not.be.ok;
			(err === null).should.be.true;
			should(succ).be.a.Number.and.equal(20);
			done();
		});
	});

	it('with errors', function(done) {
		var task = function(cb){
			cb(15);
		};

		success(task, {count:3}, function(err, succ){
			should(err).be.ok.and.be.a.Number.and.equal(15);
			should(succ).be.a.type('undefined');
			done();
		});
	});

	it('less then `count` option', function(done){
		var counter = 0;

		var task = function(cb){
			++counter;

			var err = (counter != 3) ? counter : null;
			cb(err);
		};

		success(task, {count:5}, function(err, succ){
			should(counter).equal(3);
			should(succ).be.a.type('undefined');
			done();
		});
	});

	it('no more then `count` option', function(done){
		var counter = 0;

		var task = function(cb) {
			++counter;
			cb(counter);
		};

		success(task, {count:5}, function(err, succ){
			should(counter).equal(5);
			should(succ).be.a.type('undefined');
			done();
		});
	});
});