(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HandleComma = (function () {
	function HandleComma() {
		_classCallCheck(this, HandleComma);

		this.init();
	}

	_createClass(HandleComma, [{
		key: 'init',
		value: function init() {
			this.container = document.getElementById('cont');
			this.addListener();
		}
	}, {
		key: 'addListener',
		value: function addListener() {
			this.container.addEventListener('click', function (e) {
				var tar = e.target;
				if (tar.innerHTML.endsWith(",")) {
					tar.innerHTML = tar.innerHTML.replace(",", "");
				} else {
					tar.innerHTML = tar.innerHTML + ',';
				}
			});
		}
	}]);

	return HandleComma;
})();

exports['default'] = new HandleComma();
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _splitSentence = require('./split-sentence');

var _splitSentence2 = _interopRequireDefault(_splitSentence);

var _handleComma = require('./handle-comma');

var _handleComma2 = _interopRequireDefault(_handleComma);

exports['default'] = {};
module.exports = exports['default'];

},{"./handle-comma":1,"./split-sentence":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SplitSentence = (function () {
	function SplitSentence() {
		_classCallCheck(this, SplitSentence);

		this.init();
	}

	_createClass(SplitSentence, [{
		key: 'init',
		value: function init() {
			this.items = document.getElementsByClassName('sen');
			for (var i = 0; i < this.items.length; i++) {
				this.wrapWords(this.items[i]);
			}
		}
	}, {
		key: 'wrapWords',
		value: function wrapWords(el) {
			var content = el.innerHTML;
			var str = content.split(' ').map(function (word) {
				return '<span>' + word + '</span>';
			});
			el.innerHTML = str.join(' ');
		}
	}]);

	return SplitSentence;
})();

exports['default'] = new SplitSentence();
module.exports = exports['default'];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2FtYXIvUHJvamVjdHMvbnJsLXRlc3QvYXBwL2pzL2hhbmRsZS1jb21tYS5qcyIsIi9Vc2Vycy9zYW1hci9Qcm9qZWN0cy9ucmwtdGVzdC9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9zYW1hci9Qcm9qZWN0cy9ucmwtdGVzdC9hcHAvanMvc3BsaXQtc2VudGVuY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sV0FBVztBQUNMLFVBRE4sV0FBVyxHQUNIO3dCQURSLFdBQVc7O0FBRWYsTUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0VBQ1o7O2NBSEksV0FBVzs7U0FLWixnQkFBRTtBQUNMLE9BQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRCxPQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7R0FDbkI7OztTQUVVLHVCQUFFO0FBQ1osT0FBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDL0MsUUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNuQixRQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFDO0FBQzlCLFFBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQy9DLE1BQUk7QUFDSixRQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0tBQ3BDO0lBQ0QsQ0FBQyxDQUFDO0dBQ0g7OztRQW5CSSxXQUFXOzs7cUJBc0JGLElBQUksV0FBVyxFQUFFOzs7Ozs7Ozs7Ozs7NkJDdEJOLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O3FCQUd6QixFQUFFOzs7Ozs7Ozs7Ozs7OztJQ0pYLGFBQWE7QUFDUCxVQUROLGFBQWEsR0FDTDt3QkFEUixhQUFhOztBQUVqQixNQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7RUFDWjs7Y0FISSxhQUFhOztTQUtkLGdCQUFFO0FBQ0wsT0FBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsUUFBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQ3JDLFFBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCO0dBQ0Q7OztTQUVRLG1CQUFDLEVBQUUsRUFBQztBQUNaLE9BQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFDM0IsT0FBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBUyxJQUFJLEVBQUM7QUFDOUMsV0FBTyxRQUFRLEdBQUMsSUFBSSxHQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDLENBQUM7QUFDSCxLQUFFLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDN0I7OztRQWxCSSxhQUFhOzs7cUJBcUJKLElBQUksYUFBYSxFQUFFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIEhhbmRsZUNvbW1he1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cblx0aW5pdCgpe1xuXHRcdHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQnKTtcblx0XHR0aGlzLmFkZExpc3RlbmVyKCk7XG5cdH1cblxuXHRhZGRMaXN0ZW5lcigpe1xuXHRcdHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdHZhciB0YXIgPSBlLnRhcmdldDtcblx0XHRcdGlmKHRhci5pbm5lckhUTUwuZW5kc1dpdGgoXCIsXCIpKXtcblx0XHRcdFx0dGFyLmlubmVySFRNTCA9IHRhci5pbm5lckhUTUwucmVwbGFjZShcIixcIiwgXCJcIik7XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGFyLmlubmVySFRNTCA9IHRhci5pbm5lckhUTUwgKyAnLCc7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEhhbmRsZUNvbW1hKCk7IiwiaW1wb3J0IHNwbGl0U2VudGVuY2UgZnJvbSAnLi9zcGxpdC1zZW50ZW5jZSc7XG5pbXBvcnQgaGFuZGxlQ29tbWEgZnJvbSAnLi9oYW5kbGUtY29tbWEnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHt9O1xuIiwiY2xhc3MgU3BsaXRTZW50ZW5jZSB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCl7XG5cdFx0dGhpcy5pdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbicpO1xuXHRcdGZvcih2YXIgaT0wOyBpPHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0dGhpcy53cmFwV29yZHModGhpcy5pdGVtc1tpXSk7XG5cdFx0fVxuXHR9XG5cblx0d3JhcFdvcmRzKGVsKXtcblx0XHR2YXIgY29udGVudCA9IGVsLmlubmVySFRNTDtcblx0XHR2YXIgc3RyID0gY29udGVudC5zcGxpdCgnICcpLm1hcChmdW5jdGlvbih3b3JkKXtcblx0XHRcdHJldHVybiAnPHNwYW4+Jyt3b3JkKyc8L3NwYW4+Jztcblx0XHR9KTtcblx0XHRlbC5pbm5lckhUTUwgPSBzdHIuam9pbignICcpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTcGxpdFNlbnRlbmNlKCk7Il19
