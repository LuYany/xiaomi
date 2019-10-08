<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>

    <foot></foot>
  </div>
</template>

<script>
import foot from './components/footer'
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{foot},
  methods: {
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
