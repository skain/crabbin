<template>
    <div id="app" class='pure-g'>
        <div id='main' class='pure-u-4-5'>
            <component v-bind:is='currentMainComponent' v-bind:game='game'></component>
        </div>
        <div id='sidebar' class='pure-u-1-5'>
            <component v-bind:is='currentSidebarComponent' v-bind:game='game'></component>
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
    data() {
        return {
            message: 'Welcome to Your Vue.js App',
            game: game
        }
    },
    computed: {
        currentMainComponent() {
            if (this.game.showIntro) {
                return 'intro';
            } else if (this.game.started) {
                return '';
            } else if (this.game.ended) {
                return '';
            }
        },
        currentSidebarComponent() {
            if (this.game.showIntro) {
                return '';
            } else if (this.game.started) {
                return '';
            } else if (this.game.ended) {
                return '';
            }
        }
    }
}
</script>

<style>
    #app {
        margin: 10px;
    }
</style>
