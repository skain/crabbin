<template>
    <div id='set-pot'>
        <h2>Set the Pot</h2>
        <p v-if='fishingManager.isGreenhorn'>Now let's get this puppy in the water to soak and move on!</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>


export default {
    name: 'set-pot',
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
