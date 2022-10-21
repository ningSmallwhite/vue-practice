<template>
  <div class="about">
    <h2 v-bind:title="time">触碰显示时间</h2>
    <!-- css过渡 -->
    <button @click="show = !show">点击</button>
    <div class="hellow">
      <transition name="slide-fade"> <p v-if="show">hellow</p> </transition>
    </div>
    <span v-for="(item,index) in todos" :key="index">{{item.a}}{{index + 1}}</span><br>
    <!-- 点击反转 -->
    <button @click="back">反转</button>
    <p>{{world}}</p>
    计算属性:<p>{{fanzhuan}}</p>
    <input type="text" v-model="world">
  </div>
</template>
<script>
export default{
  name: 'AboutView',
  data() {
    return {
      time: "当前时间" + new Date().toLocaleString(),
      show: true,
      todos: [
        { a: "加" },
        { a: "减" },
        { a: "乘" },
        { a: "除" }
      ],
      // 反转
      world: 'Hello World!',
    }
  },
  computed:{
    fanzhuan() {
      return this.world.split('').reverse().join('')
    }
  },
  methods:{
    back(){
      this.world = this.world.split('').reverse().join('')
    }
  }
}
</script>
<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.hellow {
  height: 20px;
}
</style>
