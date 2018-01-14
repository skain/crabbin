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
import PickJob from './components/PickJob.vue'
import PickArea from './components/PickArea.vue'
import ChooseSets from './components/ChooseSets.vue'
import SidebarDashboard from './components/SidebarDashboard.vue'
import CrabbinGame from './game/CrabbinGame';

const game = new CrabbinGame();

export default {
    name: 'app',
    components: {
        'intro': Intro,
        'pick-job': PickJob,
        'pick-area': PickArea,
        'choose-sets': ChooseSets,
        'sidebar-dashboard': SidebarDashboard
    },
    data() {
        return {
            game: game
        }
    },
    computed: {
        currentMainComponent() {
            switch(this.game.gameState) {
                case this.game.GameStates.INTRO:
                    return 'intro';
                case this.game.GameStates.PICK_JOB:
                    return 'pick-job';
                case this.game.GameStates.PICK_AREA:
                    return 'pick-area';
                case this.game.GameStates.CHOOSE_SETS:
                    return 'choose-sets';
                default:
                    return '';
            }
        },
        currentSidebarComponent() {
            switch(this.game.gameState) {
                case this.game.GameStates.INTRO:
                    return '';
                default:
                    return 'sidebar-dashboard';
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
