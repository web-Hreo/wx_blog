<!--
  @name: 'details',
  @describe: 
  @author: HeHua,
  @createDate: 2022年01月03日 16:23:41,
  @changeDate: ,
-->
<template>
<!--  -->
	<view class="details def-bg" >
    <navbar :title="songInfo.name"></navbar>
     <view class="details-bg def-bg" :style="{'background-image': 'url('+songInfo.picUrl+')'}"></view>
     <image class="details-banner" :src="songInfo.picUrl" mode="" />
  </view>
</template>

<script>
import {getSongDetail,getSongUrl} from '@/api/music'
import navbar from '@/components/navbar/navbar'
export default {
  data() {
    return {
      songInfo:{},
      songerInfo:{},
      urlId:'',
    };
  },
  components:{ navbar },
  onLoad(option){
    console.log(option); 
    this.urlId = option.id
    this.getSongDetail()
    this.getSongUrl()
  },
  onShow(){ },
  methods: {
    async getSongDetail(){
      const {privileges,songs} = await getSongDetail({ids:this.urlId})
      this.songInfo = songs[0].al
      this.songInfo.picUrl = this.songInfo.picUrl + '?param=80y80'
      this.songerInfo = songs[0].ar[0]
			this.bgAudioManager.autoplay = true
      this.bgAudioManager.title = this.songInfo.name
      this.bgAudioManager.singer = this.songerInfo.name
      this.bgAudioManager.coverImgUrl = this.songInfo.picUrl
    },
    async getSongUrl(){
      const {data} = await getSongUrl({id:this.urlId})
      console.log(data[0]);
      // 音频配置
      this.bgAudioManager.src = data[0].url
      // console.log(bgAudioManager);
    },
  },
}
</script>

<style lang="scss">
.details{
  height: 100vh;
  overflow-y: auto;
  position: relative;
      background-color: hsla(0,0%,100%,.3);
    // backdrop-filter: blur(50px);
  .details-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -99;
    filter: blur(70rpx);
  }
  .details-banner{
    width: 360rpx;
    margin: 40rpx 195rpx 0;
    height: 360rpx;
    border-radius: 20rpx;
  }
}
</style>
