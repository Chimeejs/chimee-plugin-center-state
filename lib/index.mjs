
/**
 * chimee-plugin-cencer-state v0.0.2
 * (c) 2017 yandeqiang
 * Released under ISC
 */

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

import popupFactory from 'chimee-plugin-popup';

__$styleInject("chimee-center-state{position:absolute}@keyframes a{0%{opacity:1}to{transform:scale(2);opacity:0}}chimee-center-state-correct,chimee-center-state-error,chimee-center-state-loading,chimee-center-state-tip{display:none}chimee-center-state.correct chimee-center-state-correct,chimee-center-state.error chimee-center-state-error,chimee-center-state.loading chimee-center-state-loading,chimee-center-state.tip chimee-center-state-tip{display:inline-block}chimee-center-state-correct{width:104px;height:104px}chimee-center-state-tip{position:absolute;left:26px;bottom:26px;width:52px;height:52px;border-radius:26px;background:rgba(0,0,0,.5);animation:a .5s linear 1 normal forwards}chimee-center-state.play span{background-image:url(image/play.svg)}chimee-center-state.pause span{background-image:url(image/pause.svg)}chimee-center-state.back span{background-image:url(image/back.svg)}chimee-center-state.forward span{background-image:url(image/forward.svg)}chimee-center-state.volume-high span{background-image:url(image/volume-high.svg)}chimee-center-state.volume-low span{background-image:url(image/volume-low.svg)}chimee-center-state-tip span{display:inline-block;width:24px;height:24px;margin:14px}chimee-center-state-loading,chimee-center-state-tip span{background-origin:content-box;background-size:auto 100%;background-repeat:no-repeat;background-position:50%}chimee-center-state-loading{width:52px;height:52px;padding:26px;background-image:url(image/loading.svg)}chimee-center-state-error{display:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:180px;font-size:16px;z-index:1;color:#ffcf00;text-shadow:0 0 3px red;font-weight:100}", undefined);

var clss = 'correct tip play pause back forward volume-high volume-low';
var chimeeCenterState = popupFactory({
  name: 'chimeeCenterState',
  tagName: 'chimee-center-state',
  html: '\n    <chimee-center-state-correct>\n      <chimee-center-state-loading></chimee-center-state-loading>\n      <chimee-center-state-tip>\n        <span></span>\n      </chimee-center-state-tip>\n    </chimee-center-state-correct>\n    <chimee-center-state-error>\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5</chimee-center-state-error>\n  ',
  offset: '50%',
  hide: false,
  create: function create() {},

  penetrate: true,
  operable: false,
  destroy: function destroy() {
    this.clearTimeout();
  },

  events: {
    pause: function pause() {
      this.showTip('pause');
      this.showLoading(false);
    },
    play: function play() {
      this.showTip('play');
    },
    canplay: function canplay() {
      this.playing();
    },
    playing: function playing() {
      this.playing();
    },
    waiting: function waiting() {
      this.waiting();
    },

    // 卡顿(FLV|HLS加载异常待内部特供事件)
    // stalled () {
    //   this.showLoading();
    // },
    timeupdate: function timeupdate() {
      this.clearTimeout();
    },
    keydown: function keydown(e) {
      e.stopPropagation();
      switch (e.keyCode) {
        case 37:
          {
            e.preventDefault();
            !this.live && this.showTip('back');
            break;
          }
        case 39:
          {
            e.preventDefault();
            !this.live && this.showTip('forward');
            break;
          }
        case 38:
          {
            e.preventDefault();
            this.showTip('volume-high');
            break;
          }
        case 40:
          {
            e.preventDefault();
            this.showTip('volume-low');
            break;
          }
      }
    }
  },
  methods: {
    playing: function playing() {
      this.clearTimeout();
      this.showLoading(false);
      this.showError(false);
    },
    waiting: function waiting() {
      var _this = this;

      this.clearTimeout();
      // 加载超过20秒则超时显示异常
      this._timeout = setTimeout(function () {
        return _this.showError();
      }, 3e4);
      !this.paused && this.showLoading();
    },
    clearTimeout: function (_clearTimeout) {
      function clearTimeout() {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function () {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
    }),
    showTip: function showTip(cls) {
      var _this2 = this;

      this.$domWrap.removeClass(clss).addClass('correct tip ' + cls);
      // this.tip = cls;
      setTimeout(function () {
        _this2.$domWrap.removeClass('tip ' + cls);
        // this.tip = undefined;
      }, 500);
    },
    showLoading: function showLoading(status) {
      if (status === false) {
        this.$domWrap.removeClass('loading');
      } else {
        this.$domWrap.addClass('correct loading');
      }
    },
    showError: function showError(status) {
      if (status === false) {
        this.$domWrap.removeClass('error');
      } else {
        this.$domWrap[0].className = '';
        this.$domWrap.addClass('error');
      }
    }
  }
});

module.exports = chimeeCenterState;
