'use strict';

module.exports = function(task, opts, cb) {
	if (typeof opts === 'function') {
		cb = opts;
		opts = {};
	}

	cb = cb || function () {};

	var count = Number(opts.count) || Infinity;
	var complete = 0;

	function done(err, succ) {
		if (!cb) {
			return;
		}

		if (count != Infinity) {
			complete += 1;

			if (complete >= count) {
				cb(err, succ);
				cb = null;
				return;
			}
		}

		if (!err) {
			cb(null, succ);
			cb = null;
			return;
		}

		process.nextTick(function(){
			return task(done);
		});
	}

	task(done);
};