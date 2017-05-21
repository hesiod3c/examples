'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = progressBarMiddleware;

var _progressBarActions = require('./progress-bar-actions');

var defaultTypeSuffixes = ['REQUEST', 'REQUEST_SUCCESS', 'REQUEST_FAILURE'];

function progressBarMiddleware() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypeSuffixes;

  return function (_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (action.type) {
          var _promiseTypeSuffixes = _slicedToArray(promiseTypeSuffixes, 3),
              REQUEST = _promiseTypeSuffixes[0],
              REQUEST_SUCCESS = _promiseTypeSuffixes[1],
              REQUEST_FAILURE = _promiseTypeSuffixes[2];

          var isStart = new RegExp(REQUEST + '$', 'g');
          var isEnd = new RegExp(REQUEST_SUCCESS + '$', 'g');
          var isRejected = new RegExp(REQUEST_FAILURE + '$', 'g');

          if (action.type.match(isStart)) {
            dispatch((0, _progressBarActions.progressBarShow)());
          } else if (action.type.match(isEnd) || action.type.match(isRejected)) {
            dispatch((0, _progressBarActions.progressBarHide)());
          }
        }

        return next(action);
      };
    };
  };
}