<template>
    <div>
        <h2>{{ currentFriendlyStateName }} Your Pots</h2>
        <p v-for='stage in STAGES' v-bind:class='{ active:isCurrentGameStage(stage), stage: true }' v-if='stageIsInCurrentState(stage)'>{{ getFriendlyStageName(stage) }}</p>
    </div>
</template>

<script>
// import PickJob from './components/PickJob.vue'
// import PickArea from './components/PickArea.vue'
// import ChooseSets from './components/ChooseSets.vue'
// import SidebarDashboard from './components/SidebarDashboard.vue'
// import CrabbinGame from './game/CrabbinGame';


export default {
    name: 'fishing-sidebar',
    components: {
    },
    data() {
        return {

        }
    },
    methods: {
        isCurrentGameStage(stage) {
            return stage ===  this.currentStage;
        },

        stageIsInCurrentState(stage){
            return stage.startsWith( this.fishingManager.currentState);
        },

        getFriendlyStateName(state){
            return state ===  this.fishingManager.STATES.SET ? 'Set' : 'Haul';
        },

        getFriendlyStageName(stage){
            switch (stage) {
                case  this.fishingManager.STAGES.SET_GET_POT:
                    return 'Get the Pot';
                case  this.fishingManager.STAGES.SET_BAIT_POT:
                    return 'Bait the Pot';
                case  this.fishingManager.STAGES.SET_SET_POT:
                    return 'Set the Pot';
                case  this.fishingManager.STAGES.HAUL_SPOT_BUOY:
                    return 'Spot the Buoy';
                case  this.fishingManager.STAGES.HAUL_THROW_HOOK:
                    return 'Throw the Hook';
                case  this.fishingManager.STAGES.HAUL_SET_LINE:
                    return 'Set the Line';
                case  this.fishingManager.STAGES.HAUL_RAISE_AND_EMPTY_POT:
                    return 'Raise and Empty the Pot';
                case  this.fishingManager.STAGES.HAUL_SORT_CRAB:
                    return 'Sort the Crab';
                case  this.fishingManager.STAGES.HAUL_STACK_OR_SET:
                    return 'Stack or Reset';
                default:
                    throw 'Unexpected game stage: ' + stage;
            }
        }
    },
    computed: {
        STAGES() {
            return this.fishingManager.STAGES;
        },

        currentFriendlyStateName(){
            return this.getFriendlyStateName(this.fishingManager.currentState);
        },

        currentStage() {
            return this.fishingManager.currentStage;
        }
    },
    props: ['fishingManager']
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
