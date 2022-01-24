<!--
  @name: 'songList',
  @describe: 
  @author: HeHua,
  @createDate: 2022年01月10日 21:31:56,
  @changeDate: ,
-->
<template>
	<view class="songList">
    <navbar>歌单详情</navbar>
    11111111111
    
   </view>
</template>

<script>
import navbar from '@/components/navbar/navbar'
import {getArticleById} from '@/api/index'
export default {
  components:{navbar},
  data() {
    return {
      params:{
        id: '',
        from: 'pc'
      },
      info:{},
      bgColor:'transparent'
    };
  },
  onLoad(option){ 
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

</style>
