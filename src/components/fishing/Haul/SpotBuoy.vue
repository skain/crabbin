<template>
    <div id='spot-buoy'>
        <h2>Spot the Buoy</h2>
        <p v-if='fishingManager.isGreenhorn'>OK, Greenhorn. Now keep those eyes peeled for an orange floater bag. That's our buoy and it's attached to the pot. It should
        be over there somewhere...</p>
        <p><button class='pure-button' v-on:click='simulateClick'>Simulate</button></p>
    </div>
</template>

<script>


export default {
    name: 'spot-buoy',
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
