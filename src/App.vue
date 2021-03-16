<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data() {
    return{

    }
  },

  components:{
    'app-header':AppHeader
  }
}
</script>

<style>
#app{
  text-align:center;
}
</style>
