<template>
  <div>
    <h1>这是World子组件{{"," + title}}</h1><br>
    <slot></slot><br><br>
    <button
    v-on:click="$emit('enlarge-text',9)"
    >点击变大</button>
  </div>
</template>
<script>
export default {
  name: "WorldComponent",
  props: ['title'],
  data(){
    return {

    }
  }
}
</script>