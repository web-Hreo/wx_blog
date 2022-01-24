<!--
  @name: 'articleDetails',
  @describe: 
  @author: HeHua,
  @createDate: 2022年01月03日 15:43:50,
  @changeDate: ,
-->
<template>
	<view class="articleDetails">
    <view>18 个你需要知道的 JavaScript 优化技巧</view>
    <rich-text :nodes="info.cont"></rich-text>
   </view>
</template>

<script>
import {getArticleById} from '@/api/index'
export default {
  data() {
    return {
      params:{
        id: '',
        from: 'pc'
      },
      info:{},
    };
  },
  onLoad(option){ 
    this.params.id = option.id
    this.getArticleById()
  },
  onShow(){ },
  methods: {
    async getArticleById(){
      const {data} = await getArticleById(this.params)
      console.log(data);
      this.info = data
    },
  },
}
</script>

<style lang="scss">
.articleDetails{
  width: 95%;
  margin: 0 2.5%;
  overflow: hidden;
    article{
    padding-bottom: 50px;
    /deep/a{
      word-break: break-all;
      color: blue;
      font-size: 14px;
    }
    /deep/p{
      padding: 3px 0;
      line-height: 30px;
      font-size: 14px;
      letter-spacing: 0.5px;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 13px;
      }
    }
    /deep/h2{
      font-size: 20px;
      font-weight: 400;
      color: #000;
      margin-top: 5px;
    //m端
    @media only screen and (max-width: 766.99px) {
      font-size: 16px;
    }
    }
    /deep/ul{
      list-style-type: disc;
      li{
        margin-left: 20px;
        padding: 5px 0;
      }
    }
    /deep/img{
      margin: 5px 10%;
      width: 80%;
    }
    /deep/code,/deep/ pre{
      overflow-x: auto;
      display: block;
      background-color: #000;
      font-family: Consolas,Menlo,Monaco,"lucida console","Liberation Mono","Courier New","andale mono",monospaceX,monospace,sans-serif;
      
    }
  }
  .copyright{
    word-break: break-all;
    background-color: #F5F5F5;
    box-sizing: border-box;
    border-left: 4px solid #797979;
    border-radius: 4px;
    position: relative;
    width: 100%;
    padding: 16px;
    transition: all .28s ease;
    -moz-transition: all .28s ease;
    -webkit-transition: all .28s ease;
    -o-transition: all .28s ease;
    //m端
    @media only screen and (max-width: 766.99px) {
      font-size: 12px;
    }
     a{
      word-break: break-all;
      color: rgb(65, 65, 255);
    }
  }
  /deep/ p code{
    display: inline-flex!important;
  }
  /deep/ p pre code{
    display: block!important;
  }
}
</style>
