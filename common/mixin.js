export default {
  data() {
    return {
      bgAudioManager:uni.getBackgroundAudioManager(),
      isMusic:true,
    }
  },
  methods: {
    showToast(msg) {
      uni.showToast({
        icon: 'none',
        title: msg
      })
    },
    showLoadingToast(msg = '加载中...') {
      uni.showLoading({
        title: msg
      });
    },
  },
}
