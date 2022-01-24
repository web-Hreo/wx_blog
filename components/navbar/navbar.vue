<template>
    <view class="nabbar" :style="{'height': statusBarHeight + barHeight + 'px'}">
			 //手机状态栏
			<view class="status-bar" :style="{'height': statusBarHeight + 'px'}"></view> 
			//导航栏
			<view class="nabbar-box" :style="{ 'top': statusBarHeight+ 'px', 'heigth': barHeight + 'px' }">
				<view class="nabbar-cont fbc" :style="{ width: barWidth +'px' }">
					<u-icon name="arrow-left" color="000"></u-icon>
					<slot></slot>
				</view>
			</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                statusBarHeight: 20,
                barHeight: 44,
                barWidth: null,
            };
        },
        mounted() {
            let that = this;
                        //通过uni自带api获取手机系统信息
            uni.getSystemInfo({
                success: function (res) {
                    // console.log(res)
                    that.statusBarHeight = res.statusBarHeight;      //手机状态栏高度
                    let isiOS = res.system.indexOf('iOS') > -1;    //是否为iOS系统
                    that.barHeight = !isiOS? 48: 44;    //导航栏高度，iOS：48，Android：44
                    that.barWidth = res.windowWidth - 87;     //nabbar可操作宽度 = 屏幕宽度 - 小程序右上角的胶囊宽度（87）
                }
            })
        },
    }
</script>

<style lang="scss">
    .nabbar{
        width: 100%;
    }
    .status-bar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #FFFFFF;
        // height: var(--status-bar-height);
        z-index: 999;
    }
    .nabbar-box{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 88rpx;
        background-color: #ffffff;
        padding: 0 16rpx;
        z-index: 999;
        .nabbar-cont{
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
</style>