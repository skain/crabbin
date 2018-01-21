<template>
    <div id='bait-pot'>
        <h2>Bait the Pot</h2>
        <p v-if='fishingManager.isGreenhorn'>Next you've got to bait the pot...</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>


export default {
    name: 'bait-pot',
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
