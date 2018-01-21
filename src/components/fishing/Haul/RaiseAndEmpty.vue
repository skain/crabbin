<template>
    <div id='raise-and-empty-pot'>
        <h2>Raise and Empty the Pot</h2>
        <p v-if='fishingManager.isGreenhorn'>OK. Now we raise the pot up from the depths, place it on the stager and then use the stager to shake the crab out onto the table.</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>


export default {
    name: 'raise-and-empty-pot',
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
