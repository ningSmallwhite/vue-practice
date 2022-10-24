<template>
  <div>
    <p>子组件</p> 
    <p>
      <slot>在没有提供内容的时候被渲染：后备内容：Submit</slot>
    </p>
  </div>
</template>
<script>

export default {
  computed: {
   
  },
  components:{
    
  },
  data() {
   return {
   
   }
  },
  methods: {
    
  }
}
</script>
<style scoped>

</style>
