<template>
    <div class="header">
      {{title}}
    </div>
</template>
<script>
    export default {
        props:{
            title:{
              type:String,
            }
        },
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
  .header {
    height:40px;
    text-align:center;
    line-height:40px;
    background:#f1f1f1;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    width:100%;
  }
</style>
