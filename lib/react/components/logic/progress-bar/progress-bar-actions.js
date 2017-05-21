'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressBarShow = progressBarShow;
exports.progressBarHide = progressBarHide;
exports.progressBarReset = progressBarReset;
exports.progressBarLaunch = progressBarLaunch;
exports.progressBarSimulate = progressBarSimulate;

var _progressBarConstants = require('./progress-bar-constants');

function progressBarShow() {
  return {
    type: _progressBarConstants.PROGRESS_BAR_SHOW
  };
}

function progressBarHide() {
  return {
    type: _progressBarConstants.PROGRESS_BAR_HIDE
  };
}

function progressBarReset() {
  return {
    type: _progressBarConstants.PROGRESS_BAR_RESET
  };
}

function progressBarLaunch(progressInterval, percent) {
  return {
    type: _progressBarConstants.PROGRESS_BAR_LAUNCH,
    payload: {
      progressInterval: progressInterval,
      percent: percent
    }
  };
}

function progressBarSimulate(percent, progressInterval, animationTimeout) {
  return {
    type: _progressBarConstants.PROGRESS_BAR_SIMULATE,
    payload: {
      percent: percent,
      progressInterval: progressInterval,
      animationTimeout: animationTimeout
    }
  };
}