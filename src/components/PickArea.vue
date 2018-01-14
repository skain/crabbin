<template>
    <div>
        <h1>Pick Area</h1>
        <div v-if='true'>
            <p>
                If you were the captain of your own boat right now, then you'd be picking an area on the map in which to set your pots right now.
            </p>
            <p>
                But you're not the captain, are you? <span v-if='this.game.isGreenhorn'>You're just a lowly greenhorn!</span>So instead just sit back and
                look at what your captain has picked for your area.
            </p>
            <p>
                <div>Area: {{ this.area.name }}</div>
                <div>Coordinates: {{ this.area.coordsString }}</div>
            </p>
        </div>
        <div v-if='false'>
            The actual area picker will go here. But that's a ways off yet I think...
        </div>
        <p>
            <button v-on:click='setSailClick'>Set Sail!</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'pick-area',
    created () {
        this.game.areaManager.setArea(this.game.areaManager.createRandomArea());
    },
    data() {
        return {

        }
    },
    methods: {
        setSailClick() {
            this.game.nextGameState();
        }
    },
    computed: {
        area() {
            return this.game.areaManager.currentArea;
        }
    },
    props: ['game']
}
</script>

<style scoped>

</style>
