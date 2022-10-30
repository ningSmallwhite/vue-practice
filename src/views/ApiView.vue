<template>
  <div>
    <div>
      $nextTick: <button id="firstBtn" @click="testClick()" ref="aa">{{ testMsg }}</button><br /><br />
      $set: <span v-for="(item, index) in tempList" :key="index">{{ item.id }}></span><br /><br />
      <button @click="addList">$set</button>
      <button @click="deleteList">$set</button>
    </div><br /><br />
    <!--  -->
    filter_Id:
    <div>
      <div :id="rawId">{{ rawId }}</div>
      <div :id="rawId | filter_Id">{{ rawId | filter_Id }}</div>
    </div><br />
    <!--   -->
    <button @click="getMixinData">获取mixin中的信息</button><br /><br />
    <div class="box-card"><input v-model="name" style="width: 30%;" type="text"></div>
  </div>
</template>
 
<script>
import mixin from '../mixin/mixin';
export default {
  mixins: [mixin],
  data() {
    return {
      testMsg: "原始值",
      name: '张三',
      tempList: [
        { id: 1, name: '1' },
        { id: 2, name: '2' }
      ],
      rawId: 1,
    }
  },
  watch: {
		name(newVal, oldVal) {
      alert("值准备改变了")
			console.log('newVal', newVal);
			console.log('oldVal', oldVal);
		}
	},
  filters: {
    filter_Id(value) {
      return value * 10;
    }
  },
  methods: {
    testClick() {
      let that = this;
      that.testMsg = "修改后的值";
      that.$nextTick(function () {
        console.log(that.$refs.aa.innerText);
      });
    },
    addList() {
      this.$set(this.tempList, 0, { id: 3, name: '3' })
    },
    deleteList() {
      this.$delete(this.tempList, 0);
      console.log(this.tempList, "tempList")
    },
    getMixinData() {
      alert('mixin中的name为:' + this.name);
    },
  }
}
</script>
 