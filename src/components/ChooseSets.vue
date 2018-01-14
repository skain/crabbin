<template>
    <div>
        <h1>Choose Where To Set</h1>
        <div v-if='true'>
            <p>
                And on this screen is where you would choose where to set your pots on the map you chose. You'd do that by drawing
                lines on a map of the area you chose on the last map. If you were Captain, of course. Which you're not.
            </p>
            <p>
                Below are the sets that your Captain chose. Check them out and then get to fishing!
            </p>
            <p>
                <ul>
                    <li v-for='setPlot in area.setPlots'>
                        {{ setPlot.toString()}}
                    </li>
                </ul>
            </p>
        </div>
        <div v-if='false'>
            The actual set line plotter will go here. But that's a ways off yet I think...
        </div>
        <p>
            <button v-on:click='goFishingClick'>Go Fishing!</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'choose-sets',
    created () {
        this.area.createRandomSetPlots(Math.ceil(this.boat.numPots / 10));
    },
    data() {
        return {

        }
    },
    methods: {
        goFishingClick() {
            this.game.nextGameState();
        }
    },
    computed: {
        area() {
            return this.game.areaManager.currentArea;
        },

        boat() {
            return this.game.jobManager.currentJob.boat;
        }
    },
    props: ['game']
}
</script>

<style scoped>

</style>
