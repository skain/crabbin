<template>
    <div>
        <h1>Fishing</h1>
        <div class='pure-g'>
            <div id='fishing-sidebar' class='pure-u-1-5'>
                <p v-for='stage in STAGES' v-bind:class='{ active:isCurrentGameStage(stage), stage: true }'>{{ stage }}</p>
            </div>
            <div id='fishing-main' class='pure-u-4-5'>
                <p>Some stuff</p>
                <!--<component v-bind:is='currentSidebarComponent' v-bind:game='game'></component> -->
            </div>
        </div>
    </div>
</template>

<script>
import FishingManager from '../../game/fishing/FishingManager'
// import Intro from './components/Intro.vue'
// import PickJob from './components/PickJob.vue'
// import PickArea from './components/PickArea.vue'
// import ChooseSets from './components/ChooseSets.vue'
// import SidebarDashboard from './components/SidebarDashboard.vue'
// import CrabbinGame from './game/CrabbinGame';

const fishingManager = new FishingManager();

export default {
    name: 'fish',
    components: {
        // 'intro': Intro,
    },
    data() {
        return {
            isCurrentGameStage(stage) {
                return stage === fishingManager.currentStage;
            }
        }
    },
    computed: {
        STAGES() {
            return fishingManager.STAGES;
        }
        // currentMainComponent() {
        //     switch(this.game.gameState) {
        //         case this.game.GameStates.INTRO:
        //             return 'intro';
        //         case this.game.GameStates.PICK_JOB:
        //             return 'pick-job';
        //         case this.game.GameStates.PICK_AREA:
        //             return 'pick-area';
        //         case this.game.GameStates.CHOOSE_SETS:
        //             return 'choose-sets';
        //         default:
        //             return '';
        //     }
        // },
        // currentSidebarComponent() {
        //     switch(this.game.gameState) {
        //         case this.game.GameStates.INTRO:
        //             return '';
        //         default:
        //             return 'sidebar-dashboard';
        //     }
        // }
    },
    props: ['game']
}
</script>

<style scoped>
    #fishing-sidebar p.active {
        background-color: #a9fcb7;
    }

    #fishing-sidebar p {
        padding: 10px;
    }
</style>
