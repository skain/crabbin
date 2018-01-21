<template>
    <div id='throw-hook'>
        <h2>Throw the Hook</h2>
        <p v-if='fishingManager.isGreenhorn'>Now, greenhorns pretty much never get to throw the hook. But watch as yer better does it and you might just learn something!</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>


export default {
    name: 'throw-hook',
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
