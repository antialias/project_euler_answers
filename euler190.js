var delta = 0.00001
var P = function (m) {
	var i = 0;
	var xw = new Array(m);
	for (i=0; i < m; ++i) {
		xw[i] = 1;
	}
	var X = function (xw) {
		var i, ret = new Array(xw.length), sum = 0;
		for (i=0; i < xw.length; ++i) {
			sum += xw[i];
		}
		for (i=0; i < xw.length; ++i) {
			ret[i] = xw[i] / sum * xw.length;
		}
		return ret;
	}
	var _P = function (xw) {
		var x = X(xw);
		var ret = 1, i = 0;
		for(i=0; i < xw.length; ++i) {
			ret *= Math.pow(x[i],i+1);
		}
		return ret;
	}
	var d = function (f) {
		return function (x) {
			return (f(x + delta) - f(x)) / delta;
		};
	}
	var lastp = 1;
	var pxw = 0;
	while (Math.abs(lastp - pxw) > delta) {
		lastp = pxw;
		for (i=0; i < xw.length; ++i) {
			var f = function (x) {
				var xwo = xw[i], ret;
				xw[i] = x; ret = _P(xw,i);
				xw[i] = xwo;
				return ret;
			};
			var _min, min = 0, _max, max = m;
			var df = d(f);
			var dfmid = 1;
			while (Math.abs(dfmid) > delta) {
				mid = (min + max) / 2;
				dfmid = df(mid);
				if (dfmid > 0) {
					min = mid;
				} else {
					max = mid;
				}
				if (_min === min && _max === max) {
					// nothing changed, so we break the loop
					break;
				}
				_min = min;
				_max = max;
			};
			xw[i] = mid;
		}
		pxw = _P(xw);
	}
	return pxw;
}
var S = 0;
var i;
for(i = 2; i <= 15; ++i) {
	var pi = P(i);
	console.log("P[",i,"] = ", pi);
	S += Math.floor(pi);
}
console.log("sum = ", S);
