<template>
  <div id="app">
    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/">VforView</router-link> |
      <router-link to="/onclick">OnclickView</router-link> |
      <router-link to="/ParentComponent">ParentComponent</router-link> |
      <router-link to="/PropsView">PropsView</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
