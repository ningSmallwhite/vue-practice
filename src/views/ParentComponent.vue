<template>
  <div :style="{ fontSize:postFontSize + 'px' }">
    <worldComponent :title="title" v-on:enlarge-text="postFontSize += $event">Something bad happened.</worldComponent>
    <div>
      <!-- <component :is="helloWorldVue"></component> -->
    </div>
  </div>
</template>
<script>
// import helloWorldVue from '../components/HelloWorld'
import worldComponent from '../components/WorldComponent'
export default {
  name:'ParentComponent',
  data(){
    return {
      title: "你好",
      postFontSize: 1
    }
  },
  components:{
    worldComponent,
    // helloWorldVue
  },
}
</script>