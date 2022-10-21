<template>
  <div>
    <!-- <a href="www.baidu.com" @click.stop="doThis">.stop阻止单击事件继续传播</a><br/><br/> -->
    提交事件不再重载页面.prevent<form @submit.prevent="onSubmit"></form><br/>
    <!-- <a ref="www.baidu.com" @click.stop.prevent="doThat">修饰符可以串联</a><br/><br/>
    <a href="www.baidu.com" @click.once="doThis">点击事件只会触发一次.once</a><br/><br/> -->
    <div @scroll.passive="onScroll">.passive滚动事件的默认行为 (即滚动行为) 将会立即触发</div>
    <h2>按键修饰符</h2>
    回车键：<input type="text" @keyup.enter="submit">
    <h2>多个复选框，绑定到同一个数组</h2>
    <input type="checkbox" id="jack" value="Jack" v-model="checkName">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkName">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkName">
    <label for="mike">Mike</label><br>
    多选：<span>{{checkName}}</span>
    <h2>单选按钮</h2>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label><br>
    单选：<span>{{picked}}</span>
    <h2>选择框multiple多选，按住ctrl</h2>
    <select v-model="selected" multiple>
      <option disabled value="请选择">请选择</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select><br>
    选择：<span>{{selected}}</span>
    <h2>.lazy在input光标取消后同步数据</h2>
    <input type="text" v-model.lazy="messages"><br>
    同步:<span>{{messages}}</span>
    <h2>.number将输入的值自动转化为数值类型</h2>
    <input type="number" v-model.number="age">
    <h2>.trim过滤首尾空格</h2>
    <input type="text" v-model.trim="trims"><br>
    去除空格：<span>{{trims}}</span>
  </div>
</template>
<script>
export default {
  name: 'OnclickView',
  data() {
    return {
      checkName: [],
      picked: '',
      selected: [],
      messages: '',
      age: 123,
      trims: ''
    }
  }
}
</script>
<style>

</style>