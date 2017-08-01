import './centerstate.css';
import popupFactory from 'chimee-plugin-popup';

const clss = 'correct tip play pause back forward volume-high volume-low';
const chimeeCenterState = popupFactory({
  name: 'chimeeCenterState',
  tagName: 'chimee-center-state',
  html: `
    <chimee-center-state-correct>
      <chimee-center-state-loading></chimee-center-state-loading>
      <chimee-center-state-tip>
        <span></span>
      </chimee-center-state-tip>
    </chimee-center-state-correct>
    <chimee-center-state-error>加载失败，请刷新重试</chimee-center-state-error>
  `,
  offset: '50%',
  hide: false,
  create () {},
  penetrate: true,
  operable: false,
  destroy () {
    this.clearTimeout();
  },
  events: {
    pause () {
      this.showTip('pause');
      this.showLoading(false);
    },
    play () {
      this.showTip('play');
    },
    canplay () {
      this.playing();
    },
    playing () {
      this.playing();
    },
    waiting () {
      this.waiting();
    },
    // 卡顿(FLV|HLS加载异常待内部特供事件)
    // stalled () {
    //   this.showLoading();
    // },
    timeupdate () {
      this.clearTimeout();
    },
    keydown (e) {
      
      // controlbar 存在，才会有键盘事件，因此如果 controlbar 组件没有加载时，return
      const hasControlbar = this.$videoConfig.plugin.some(item => {
        const name = item.name || item;
        return name === 'chimeeControl';
      })
      if (!hasControlbar) return;

      e.stopPropagation();
      switch (e.keyCode) {
        case 37: {
          e.preventDefault();
          !this.live && this.showTip('back');
          break;
        }
        case 39: {
          e.preventDefault();
          !this.live && this.showTip('forward');
          break;
        }
        case 38: {
          e.preventDefault();
          this.showTip('volume-high');
          break;
        }
        case 40: {
          e.preventDefault();
          this.showTip('volume-low');
          break;
        }
      }
    },
  },
  methods: {
    playing () {
      this.clearTimeout();
      this.showLoading(false);
      this.showError(false);
    },
    waiting () {
      this.clearTimeout();
      // 加载超过20秒则超时显示异常
      this._timeout = setTimeout(() => this.showError(), 3e4);
      !this.paused && this.showLoading();
    },
    clearTimeout () {
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
    },
    showTip (cls) {
      this.$domWrap.removeClass(clss).addClass('correct tip ' + cls);
      // this.tip = cls;
      setTimeout(() => {
        this.$domWrap.removeClass('tip ' + cls);
        // this.tip = undefined;
      }, 500);
    },
    showLoading (status) {
      if(status === false) {
        this.$domWrap.removeClass('loading');
      }else{
        this.$domWrap.addClass('correct loading');
      }
    },
    showError (status) {
      if(status === false) {
        this.$domWrap.removeClass('error');
      }else{
        this.$domWrap[0].className = '';
        this.$domWrap.addClass('error');
      }
    }
  }
});

export default chimeeCenterState;
