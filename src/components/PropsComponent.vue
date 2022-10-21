<template>
  <div>
    {{title}}
  </div>
</template>
<script>
export default {
  name: 'PropsComponent',
  // props:{
  //   title: [String, Number]
  // },

  props:[ 'title' ],
    
  computed: {
   
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
