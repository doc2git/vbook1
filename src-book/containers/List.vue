<template>
    <div class="list page">
      <MHeader title="列表页"></MHeader>
      <scroller
        class="scroll"
        :on-refresh="getData"
        :on-infinite="getListByPage"
        ref="scroll"
      >
        <ul>
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.bookInfo}}</p>
              <span @click="collect(book)">
                <i class="iconfont icon-shoucang"></i>
                收藏
              </span>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
</template>
<script>
    import MHeader from '../components/MHeader.vue'
    import {getBookList} from '../api';
    import {mapMutations} from 'vuex';
    import * as types from '../vuex/mutation-types';
    export default {
        data(){
            return {books:[]}
        },
        computed: {},
        components: {MHeader},
        methods: {
          ...mapMutations([types.ADD_COLLECT]),
          getListByPage(){
              getBookList().then(res=>{
                  this.books = [...this.books, ...res.data];
                  this.$refs.scroll.finishInfinite(false);
              });
          },
          getData(){
              getBookList().then(res=>{
                  this.books = res.data;
                  setTimeout(()=>{
                      this.$refs.scroll.finishPullToRefresh();
                  },500);
              })
          },
          collect(book){
              this[types.ADD_COLLECT](book);
              this.$router.push('/collect');
          }
        }
    }
</script>
<style scoped lang="less">
  .list{
    .scroll{
      top:40px;
      bottom:50px;
      height:auto;
    }
    li{
      display:flex;
      height:160px;
      border-bottom:1px solid #ccc;
      align-items:center;
      div{
        height:150px;
        margin-left:10px;
      }
      img{
        height:150px;
        width:108px;
      }
    }
  }
</style>
