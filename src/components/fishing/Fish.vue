<template>
    <div>
        <h1>Fishing</h1>
        <div class='pure-g'>
            <div id='fishing-sidebar' class='pure-u-1-5'>
                <component v-bind:is='currentSidebarComponent' v-bind:fishingManager='fishingManager'></component>
            </div>
            <div id='fishing-main' class='pure-u-4-5'>
                <p>Some stuff</p>
            </div>
        </div>
    </div>
</template>

<script>
import FishingManager from '../../game/fishing/FishingManager'
import Sidebar from './FishingSidebar.vue'
// import PickJob from './components/PickJob.vue'
// import PickArea from './components/PickArea.vue'
// import ChooseSets from './components/ChooseSets.vue'
// import SidebarDashboard from './components/SidebarDashboard.vue'
// import CrabbinGame from './game/CrabbinGame';

const fishingManager = new FishingManager();

export default {
    name: 'fish',
    components: {
        'sidebar': Sidebar,
    },
    data() {
        return {
            fishingManager: fishingManager,

            isCurrentGameStage(stage) {
                return stage === fishingManager.currentStage;
            },

            stageIsInCurrentState(stage){
                return stage.startsWith(fishingManager.currentState);
            },

            getFriendlyStateName(state){
                return state === fishingManager.GAME_STATES['SET'] ? 'Set' : 'Haul';
            },

            getFriendlyStageName(stage){
                switch (stage) {
                    case fishingManager.STAGES.SET_GET_POT:
                        return 'Get the Pot';
                    case fishingManager.STAGES.SET_BAIT_POT:
                        return 'Bait the Pot';
                    case fishingManager.STAGES.SET_SET_POT:
                        return 'Set the Pot';
                    case fishingManager.STAGES.HAUL_SPOT_BUOY:
                        return 'Spot the Buoy';
                    case fishingManager.STAGES.HAUL_THROW_HOOK:
                        return 'Throw the Hook';
                    case fishingManager.STAGES.HAUL_SET_LINE:
                        return 'Set the Line';
                    case fishingManager.STAGES.HAUL_RAISE_AND_EMPTY_POT:
                        return 'Raise and Empty the Pot';
                    case fishingManager.STAGES.HAUL_SORT_CRAB:
                        return 'Sort the Crab';
                    case fishingManager.STAGES.HAUL_STACK_OR_SET:
                        return 'Stack or Reset';
                    default:
                        throw 'Unexpected game stage: ' + stage;
                }
            }
        }
    },
    computed: {
        STAGES() {
            return fishingManager.STAGES;
        },

        currentFriendlyStateName(){
            return this.getFriendlyStateName(fishingManager.currentState);
        },

        currentSidebarComponent() {
            switch(fishingManager.currentStage){
                default:
                    return 'sidebar';
            }
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
