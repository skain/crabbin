<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <div id="app" class='pure-g'>
            <div id='main' class='pure-u-4-5'>
                <intro></intro>
            </div>
            <div id='sidebar' class='pure-u-1-5'>
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import Intro from './components/Intro.vue'

export default {
  name: 'app',
  components: {
      'intro': Intro
  },
  data () {
    return {
      message: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
