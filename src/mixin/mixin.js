const mixin = {
  data() {
    return {
      name: '初始名字：张三',
      mixinMsg: 'mixinMsg'
    };
  },
  methods: {
    getMixinMsg() {
      alert(
        '我是mixin.js中的getmsg方法，mixinmsg的数据是' + this.mixinMsg
      );
    },
    getHomeMsg() {
      alert(
        '我是mixin.js中的getHomeMsg方法，HomeMsg的数据是' + this.homeMsg
      );
    }
  },
  created() {
    alert('mixin生命周期');
  }
};

export default mixin;