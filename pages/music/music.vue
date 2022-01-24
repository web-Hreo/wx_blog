<!--
  @name: 'music',
  @describe: 
  @author: HeHua,
  @createDate: 2022年01月03日 16:23:41,
  @changeDate: ,
-->
<template>
	<view class="music">
    <!-- 推荐新音乐 -->
    <view class="music-title fbc">
      <view class="title-text">推荐音乐</view>
      <view class="title-more fc">更多 <u-icon size="20rpx" name="arrow-right"></u-icon></view>
    </view>
    <view class="music-hotList fc">
      <view class="music-item" v-for="it in musicList" :key="it.id" @click="goDetails(it.id)">
        <image class="item-banner" :src="it.picUrl" mode="aspectFit" />
        <view class="item-songName">{{it.name}}</view>
        <view class="item-songer">{{it.song.artists[0].name}}</view>
      </view> 
    </view>
    <!-- 推荐歌单 -->
    <view class="music-title fbc mt-20">
      <view class="title-text">推荐歌单</view>
      <view class="title-more fc">更多 <u-icon size="20rpx" name="arrow-right"></u-icon></view>
    </view>
    <view class="music-hotList fc">
      <view class="music-item" v-for="it in personalizedList" :key="it.id" @click="goList(it.id)">
        <image class="item-banner" :src="it.picUrl" mode="aspectFit" />
        <view class="item-songName songName2 ellipsis-2">{{it.name}}</view>
        <!-- <view class="item-songer">{{it.song.artists[0].name}}</view> -->
      </view> 
    </view>
 
  </view>
</template>

<script>
import {getNewsong,getPersonalized} from '@/api/music'
export default {
  data() {
    return {
      musicList:[],
      personalizedList:[]
    };
  },
  onLoad(){ 
    this.getNewsongList()
    this.getPersonalized()
  },
  onShow(){ },
  methods: {
    async getNewsongList(){
      const {result} = await getNewsong({limit:6})
      result.forEach(it =>{
        it.picUrl = it.picUrl+'?param=200y200'
      })
      this.musicList = result
    },
    async getPersonalized(){
      const {result} = await getPersonalized({limit:6})
      console.log(result);
      result.forEach(it =>{
        it.picUrl = it.picUrl+'?param=200y200'
      })
      this.personalizedList = result
    },
    //查看详情
    goDetails(id){
      uni.navigateTo({
         url: '/pages/music/details?id='+id
      });
    },
    //跳转歌单列表
    goList(id){
      uni.navigateTo({
         url: '/pages/music/songList?id='+id
      });
    }
  },
  async onPullDownRefresh() {
    await this.getNewsongList()
    await this.getPersonalized()
    uni.stopPullDownRefresh()
    this.showToast('刷新成功')
  },
}
</script>

<style lang="scss">
.music{
  width: 710rpx;
  margin: 0 20rpx;
  padding-bottom: 40rpx;
  .music-title{
    padding: 20rpx 0;
    .title-text{
      font-size: 34rpx;
      font-weight: bold;
      color: #000;
    }
    .title-more{
      font-size: 24rpx;
      color: #cccccc;
      .u-icon{
        padding-left: 10rpx;
      }
    }
  }
  .music-hotList{
    display: flex;
    flex-wrap: wrap;
    min-height: 633rpx;
    .music-item{
      width: 225rpx;
      margin-right: 19rpx;
      margin-bottom: 19rpx;
      
      &:nth-child(3n){
        margin-right: 0;
      }
      image{
        width: 225rpx;
        height: 225rpx;
        border-radius: 20rpx;
        overflow: hidden;
      }
      .item-songName{
        width: 225rpx;
        font-size: 26rpx;
        color: #000;
      }
      .songName2{
        height: 70rpx;
      }
      .item-songer{
        font-size: 24rpx;
        color: #999;
      }
    }
  }
}

</style>
