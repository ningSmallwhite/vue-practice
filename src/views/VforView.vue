<template>
  <div>
    <div>
      filter返回过滤后的元素:
      <span v-for="(item, index) in evenNumber" :key="index">{{ item }}</span><br /><br />
    </div>
    <div>
      在嵌套的v-for中过滤后的元素:
      <span v-for="(todo, index) in todos" :key="index">
        <span v-for="(n, index) in even(todo)" :key="index">{{ n + ',' }}</span>
      </span><br/><br/>
    </div>
    <div>
      整数v-for:<span v-for="(n, index) in 10" :key="index">{{ n }}</span>
    </div>
    <h3>v-for的优先级比v-if的优先级高</h3>
    将v-if放在v-for外层:
    <div>
      <template v-if="number.length != 0">
      <span v-for="(item, index) in number" :key="index">{{item}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VforView',
  computed: {
    evenNumber() {
      return this.number.filter((item) => {
        return item % 2 !== 0
      })
    }
  },
  data() {
    return {
      number: [1, 2, 3, 4, 5, 6],
      todos: [[1, 4, 6, 9, 22, 44, 20], [4, 8, 10, 24, 22, 40]]
    }
  },
  methods: {
    even(todo) {
      return todo.filter((item) => {
        return item % 2 === 0
      })
    }
  }
}
</script>
<style scoped>

</style>
