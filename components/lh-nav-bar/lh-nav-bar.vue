<template>
  <view
    class="lh-nav-bar"
    :style="{
      marginTop: menuButtonBounding.top + 'px',
      height: menuButtonBounding.height + 'px',
      marginLeft: 'calc(100vw - ' + menuButtonBounding.right + 'px)',
      marginRight: 'calc(100vw - ' + menuButtonBounding.right + 'px)'
    }"
  >
    <view class="nav-left">
      <view class="left-wrapper" v-if="menuButtonBounding" :style="{ height: menuButtonBounding.height + 'px', width: menuButtonBounding.height * (btnNum * 2 - 1) + 'px' }">
        <image :src="leftIcon" class="left-icon" v-if="leftIcon" mode="aspectFit" @click="triggerLeft"></image>
        <!-- <view class="hr-line" v-if="rightIcon"></view>
        <image :src="rightIcon" class="left-icon" v-if="rightIcon" mode="aspectFit" @click="triggerRight"></image> -->
      </view>
    </view>
    <view class="nav-center">
      <text v-if="centerText" class="center-text" :style="{ color: color}">{{ centerText }}</text>
			<image v-else-if="centerImg" class="center-img" :src="centerImg" :style="{ width: imgWidth + 'px' , height: imgHeight + 'px' }" mode="aspectFit"></image>
      
    </view>
    <!-- <image :src="leftIcon"></image>
    <view></view> -->
  </view>
</template>

<script>
export default {
  name: 'lh-nav-bar',
  props: {
    isSlot: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    centerIcon: {
      type: String,
      default: ''
    },
    centerText: {
      type: String,
      default: ''
    },
		color: {
			type: String,
			default: '#fff'
		},
		centerImg: {
			type: String,
			default: ''
		},
		imgWidth: {
			type: Number,
			default: 30
		},
		imgHeight: {
			type: Number,
			default: 30
		}
  },
  data() {
    return {
      menuButtonBounding: {
        top: 24
      },
      btnNum: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.menuButtonBounding = uni.getMenuButtonBoundingClientRect();
    });
    if (this.leftIcon) {
      this.btnNum++;
    }
    if (this.rightIcon) {
      this.btnNum++;
    }
  },
  methods: {
    triggerLeft() {
      this.$emit('triggerLeft');
    },

    // triggerRight() {
    //   this.$emit('triggerRight');
    // }
  }
};
</script>

<style scoped lang="scss">
.lh-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 1000;
  .left-wrapper {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    // border-radius: 50px;
    // border: 1px solid rgba(151, 151, 151, 0.2);
    // background: rgba(255, 255, 255, 0.6);
    box-sizing: border-box;
    // .hr-line {
    //   height: 30rpx;
    //   width: 1rpx;
    //   border-left: 1px solid rgba(151, 151, 151, 0.2);
    // }
  }
  .left-icon {
    width: 44rpx;
    height: 44rpx;
  }
  .center-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 32rpx;
    font-weight: 400;
    color: #fff;
  }
	.center-img{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
