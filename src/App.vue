<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <div id="app" class='pure-g'>
            <div id='main' class='pure-u-4-5'>
                <intro v-bind:game="game"></intro>
            </div>
            <div id='sidebar' class='pure-u-1-5'>
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>
import Intro from './components/Intro.vue'
import CrabbinGame from './game/game_main';

const game = new CrabbinGame();

export default {
  name: 'app',
  components: {
      'intro': Intro
  },
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      game: game
    }
  }
}
</script>

<style>
    #app {
        margin: 10px;
    }
</style>
