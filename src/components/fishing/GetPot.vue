<template>
    <div id='get-pot'>
        <h2>Get the Pot</h2>
        <!-- <p v-if='fishingManager.isGreenhorn'>First order of business is the pot off the stack and onto the stager...</p> -->
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
