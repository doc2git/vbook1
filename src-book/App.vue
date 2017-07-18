<template>
    <div id="app">
      <transition name="translate">
        <router-view class="pos"></router-view>
      </transition>
      <tab></tab>
    </div>
</template>
<script>
  import Tab from './components/Tab.vue';
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {
            Tab
        },
        methods: {}
    }
</script>
<style scoped>
.translate-enter{
  transform: translate(100%);
}
.translate-enter-active{
  transition: all .3s linear;
}
.translate-leave-active{
  transform: translate(-100%);
  transition: all .3s linear;
}
.pos{
  position: absolute;
  top:0;
  left:0;
  width:100%;
}
</style>
