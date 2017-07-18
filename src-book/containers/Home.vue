<template>
  <div class="page">
    <MHeader title="首页">
      /* 这里可以写带有 slot 属性的div标签 */
    </MHeader>
    <div class="content-scroll">
      <Swiper :data="sliders"></Swiper>
      <h3>热门图书</h3>
      <ul class="hot-list" v-if="hots.length">
        <li v-for="hot in hots">
          <img :src="hot.bookCover" alt="">
          <p>{{hot.bookName}}</p>
        </li>
      </ul>
      <Loading v-else></Loading>
    </div>
  </div>
</template>
<script>
  import MHeader from '../components/MHeader.vue';
  import Swiper from '../components/Swiper.vue';
  import Loading from '../components/Loading.vue';
  import {getSliders, getHotBook} from '../api';
  console.log('Home.vue 24', getHotBook, getHotBook());

  console.log(26, this);
  export default {
    data(){
      return {
        sliders: [],
        hots: []
      }
    },
    created(){
      getSliders().then((res) => {
        console.log(35, res);
        console.log(36, res.data);
        console.log(37, this);
        this.sliders = res.data;
      });
      getHotBook().then(res => {
        this.hots = res.data;
      })
    },
    computed: {},
    components: {MHeader, Swiper, Loading},
    methods: {}
  }
</script>
<style scoped lang="less">
  .hot-list {
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-bottom: 10px;
      width: 33.333333%;
      p {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      img {
        width: 100%;
        height: 150px;
      }
    }
  }
</style>
