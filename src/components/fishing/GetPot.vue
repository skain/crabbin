<template>
    <div id='get-pot'>
        <h2>Get the Pot</h2>
        <p v-if='fishingManager.isGreenhorn'>First order of business is the pot off the stack and onto the stager...</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>


export default {
    name: 'get-pot',
    components: {
    },
    data() {
        return {

        }
    },
    methods: {
        isCurrentGameStage(stage) {
            return stage ===  this.fishingManager.currentStage;
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
        },

        simulateClick(event) {
            console.log(this);
            this.fishingManager.nextStage();
        }
    },
    computed: {
        STAGES() {
            return this.fishingManager.STAGES;
        },

        currentFriendlyStateName(){
            return this.getFriendlyStateName(this.fishingManager.currentState);
        },
    },
    props: ['fishingManager']
}
</script>

<style scoped>
    #get-pot {
        margin: 0px 10px 0px 20px;
    }
</style>
