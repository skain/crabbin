<template>
    <div id='stack-or-reset'>
        <h2>Sort the Crab</h2>
        <p v-if='fishingManager.isGreenhorn'>Now the captain's got to decide if that haul was worth putting the pot back for another soak or if we should stack
        it and look for better fishing elsewhere...</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>

export default {
    name: 'stack-or-reset',
    components: {
    },
    data() {
        return {

        }
    },
    methods: {
        simulateClick(event) {
            this.fishingManager.nextStage();
        }
    },
    computed: {
        currentFriendlyStateName(){
            return this.getFriendlyStateName(this.fishingManager.currentState);
        },
    },
    props: ['fishingManager']
}
</script>

<style scoped>
</style>
