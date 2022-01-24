<!--
  @name: 'index',
  @describe: 
  @author: HeHua,
  @createDate: 2022年01月03日 14:43:15,
  @changeDate: ,
-->
<template>
	<view class="index">
    <view class="tab">
      <u-tabs :list="tabList" sticky
        @change="change"
        lineColor="#1abc9c"
        :activeStyle="{ color: '#1abc9c',}"
        :inactiveStyle="{ color: '#666666',}"
      ></u-tabs>
    </view>
    <view class="cont">
      
      <view v-if="!articleList.length">
        <u-skeleton rows="3" title :loading="true" :animate="true"></u-skeleton>
      </view>
      <view v-else class="index-article">
        <view class="article-item" @click="goDetails(it._id)" v-for="it in articleList" :key="it._id">
          <!-- <view class="cont-user fc">
            <image src="http://cdn.heblogs.cn/avatar.jpg" mode="" />
            <view class="user-info">
              <view class="name">Manang Hhua</view>
              <view class="date">{{it.createTime}}</view>
            </view>
          </view> -->
          <image lazy-load class="item-banner" :src="it.viewImg" mode="" />
          <view class="item-title">{{it.title}}</view>
          <view class="fbc">
            <view class="fc">
              <view class="item-tag">{{it.tag}}</view>
              <view class="item-view"><text>{{it.viewNum}}</text>人已浏览</view>
            </view>
            <view class="item-date">{{it.createTime}}</view>
          </view>
          <!-- <view class="tac">
            <view>{{it.title}}</view>
            <view class="pt-10">{{it.createTime}}・{{it.tag}}・{{it.viewNum}}次浏览</view>
          </view> -->
        </view>
      </view>
    </view>

   </view>
</template>

<script>
import {getTag,getArticleAll} from '@/api/index'
export default {
  data() {
    return {
      tabList:[
        { name:'最新'},
        { name:'最热'},
      ],
      params:{
        pageNo:1,
        sort:''
      },
      articleList:[],//文章列表
    };
  },
  onLoad(){ 
    this.getTagList()
    this.getArticleAllList()
  },
  onShow(){ },
  methods: {
    async getTagList(){
      const {data} = await getTag()
      console.log(data);
      data.reverse()
      this.tabList = [...this.tabList,...data]
    },
    async getArticleAllList(){
      const {data} = await getArticleAll(this.params)
      console.log(data);
      this.articleList = data.data
    },
    change(e){
      if(e.index===1){
        this.params.sort='viewNum'
      }
      this.getArticleAllList()
      console.log(e);
    },
    //去详情页
    goDetails(id){
      uni.navigateTo({
         url: '/pages/index/articleDetails?id='+id
      });
    }
  },
  async onPullDownRefresh() {
    await this.getTagList()
    await this.getArticleAllList()
    uni.stopPullDownRefresh()
    this.showToast('刷新成功')
  },
}
</script>

<style lang="scss">
page{
  background-color:#f1f1f1;
}
.tab{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80rpx;
  z-index: 10;
  .u-tabs{
    background-color: #ffffff;
  }
}

.cont{
  width: 710rpx;
  margin: 110rpx 20rpx 0;
  .cont-user{
    image{
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
    }
    .user-info{
      padding-left: 20rpx;
      .name{
        font-size: 32rpx;
        color: #000;
      }
      .date{
        font-size: 22rpx;
        color: #999;
        padding-top: 10rpx;
      }
    }
  }
}
.index-article{
  .article-item{
    border-radius: 15rpx;
    width: 650rpx;
    background-color: #fff;
    padding: 30rpx;
    border-radius: 15rpx;
    color: #fff;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    font-size: 26rpx;
    margin-top: 20rpx;
    .item-banner{
      width: 100%;
      height: 300rpx;
      border-radius: 10rpx;
    }
    .item-title{
      padding-top: 20rpx;
      font-size: 30rpx;
      color: #333;
    }
    .item-tag{
      margin-top: 10rpx;
      padding: 10rpx 20rpx;
      background-color: #1abc9c;
      border-radius: 40rpx;
      display: inline-block;
      color: #fff;
      font-size: 20rpx;
    }
    .item-date,.item-view{
      font-size: 22rpx;
      color: #999;
      padding-top: 10rpx;
      padding-left: 20rpx;
    }
  }
}
</style>
