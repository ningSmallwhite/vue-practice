<template>
  <div>
    <!-- 独占默认插槽的简写 -->
    <!-- 失活的组件将会被缓存！-->
    <keep-alive>
      <HelloWorldVue>
        <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
      </HelloWorldVue>
    </keep-alive>
    <slotComponent>普通文本插槽</slotComponent>
    <slotComponent>
      <HelloWorldVue></HelloWorldVue>
    </slotComponent>
    <slotComponent ref="username"><input type="text">{{ content }}</slotComponent>
    <p @click="but">-------------------------------------</p>
    具名插槽：
    <HelloWorldVue>
      <template v-slot:header>
        <h2>这是添加了v-slot:header头部插槽</h2>
      </template>
      <h2>这是什么也没添加的默认内容插槽</h2>
      <template v-slot:footer>
        <h2>这是添加了v-slot:footer的尾部插槽</h2>
      </template>
    </HelloWorldVue>
    <span>inline-template内联模板</span>
    <HelloWorldVue inline-template>
      <div>
        <span>inline-template</span>
      </div>
    </HelloWorldVue>
  </div>
</template>
<script type="text/x-template" id="HelloWorldVue">
  <p>Hello hello hello</p>
</script>
<script>
import slotComponent from "../components/SlotComponent";
import HelloWorldVue from "@/components/HelloWorld.vue";
export default {
  computed: {

  },
  components: {
    slotComponent, HelloWorldVue
  },
  created() {
    console.log(this.$root.loading,"$root获取根实例main.js的值");
  },
  data() {
    return {
      content: "父级data中的内容",
      contents: "独占默认插槽",
    }
  },
  methods: {
    but() {
      this.$refs.username.focus()
    }
  }
}
</script>
<style scoped>
</style>
