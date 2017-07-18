<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in data" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination">
    </div>
  </swiper>
</template>
<script>
  export default {
    name: 'carrousel',
    props: {
      data: {
        type: Array,
      }
    },
    data(){
      return {
        swiperOption: {
          loop: true,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
        }
      }
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>
<style scoped>
img{width:100%;}
</style>
