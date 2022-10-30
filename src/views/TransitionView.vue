<template>
  <div>
    <button @click="show = !show">点击</button>
    <transition name="bounce">
      <p v-if="show">放大消失</p>
    </transition>
    <!--  -->
    <div id="list-demo" class="demo">
      <button @click="add">随机添加</button>
      <button @click="remove">随机删除</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <!--  -->
      <div id="flip-list-demo" class="demo">
        <button @click="shuffle">打乱</button>
        <transition-group name="flip-list" tag="ul">
          <li v-for="item in items" v-bind:key="item">
            {{ item }}
          </li>
        </transition-group>
      </div>
    </div>
    <!--  -->
    <div id="animated-number-demo">
      <input v-model.number="number" type="number" step="1000">
      <p>{{ animatedNumber }}</p>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import { gsap } from "gsap";
export default {
  data() {
    return {
      show: true,
      items: [11, 12, 13, 14, 15, 16, 17, 18, 19],
      nextNum: 20,
      number: 1000,
      tweenedNumber: 1000
    }
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle() {
      this.items = _.shuffle(this.items);
    },
  }
}
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

/*  */
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to

/* .list-leave-active for below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}

/*  */
.flip-list-move {
  transition: transform 1s;
}
</style>