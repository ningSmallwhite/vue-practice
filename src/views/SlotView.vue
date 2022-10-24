<template>
  <div>
    <!-- 独占默认插槽的简写 -->
    <HelloWorldVue>
      <template v-slot:default="slotProps">{{slotProps.user.firstName}}</template>
    </HelloWorldVue>
    <slotComponent>普通文本插槽</slotComponent>
    <slotComponent>
      <HelloWorldVue></HelloWorldVue>
    </slotComponent>
    <slotComponent>{{content}}</slotComponent>
    <p>-------------------------------------</p>
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
  </div>
</template>
<script>
import slotComponent from "../components/SlotComponent";
import HelloWorldVue from "@/components/HelloWorld.vue";
export default {
  computed: {

  },
  components: {
    slotComponent, HelloWorldVue
  },
  data() {
    return {
      content: "父级data中的内容",
      contents: "独占默认插槽"
    }
  },
  methods: {

  }
}
</script>
<style scoped>
</style>
