<template>
    <div id='get-pot'>
        <h2>Get the Pot</h2>
        <p v-if='fishingManager.isGreenhorn'>First order of business is get the pot off the stack and onto the stager...</p>
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
            this.fishingManager.nextStage();
        }
    },
    computed: {
    },
    props: ['fishingManager']
}
</script>

<style scoped>
</style>
