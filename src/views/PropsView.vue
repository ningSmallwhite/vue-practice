<template>
  <div>
    <Pro-Component title="'这是父组件传的静态数据'"></Pro-Component>
    <Pro-Component :title="flag"></Pro-Component>
    <Pro-Component :title="[12,34,45]"></Pro-Component>
    <Pro-Component :title="posts"></Pro-Component>
  </div>
</template>
<script>
import ProComponent from "../components/PropsComponent"
export default {
  name:"PropView",
  computed: {
   
  },
  components:{
    ProComponent
  },
  data() {
   return {
    flag:"动态数据",
    posts: {
      name: "莎士比亚",
      age: "100"
    }
   }
  },
  methods: {
    
  }
}
</script>
<style scoped>

</style>
