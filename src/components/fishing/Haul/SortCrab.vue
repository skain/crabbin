<template>
    <div id='sort-crab'>
        <h2>Sort the Crab</h2>
        <p v-if='fishingManager.isGreenhorn'>Finally here's a task a greenhorn can do. You've got to pick up each crab, inspect it and measure it. If it's dirty or too small,
        you've got to throw it back. Otherwise put it into the hold.</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>

export default {
    name: 'sort-crab',
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
