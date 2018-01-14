<template>
    <div>
        <h1>Welcome to Crabbin!</h1>
        <div class="currentMessage">
            {{ currentMessage }}
        </div>
        <div>
            <button class="pure-button" v-on:click="previous" v-bind:disabled="isFirstPage">Prev</button>
            <button class="pure-button" v-on:click="next" v-if="!isLastPage">Next</button>
            <button class="pure-button" v-on:click="startGame" v-if="isLastPage">Start!</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'intro',
    data() {
        return {
            curPageIndex: 0,
            pages: [
                "So you want to be a crabber, huh? It's a tough, dangerous life, but exciting as hell and potentially quite lucrative!",
                "Well, kid, it's your life. Don't go thinkin' you're gonna just be the captain of a boat on your first day." +
                    " First you'll have to get a job as a crewman to learn the ropes and try to earn enough money to buy a boat.",
                "Click start below if you're ready and start your life as a greenhorn! Good luck!"
            ]
        }
    },
    methods: {
        next() {
            if (!this.isLastPage) {
                this.curPageIndex++;
            }
        },
        previous() {
            if (!this.isFirstPage) {
                this.curPageIndex--;
            }
        },
        startGame() {
            this.game.nextGameState();
        }
    },
    computed: {
        isFirstPage() {
            return this.curPageIndex === 0;
        },
        isLastPage() {
            return this.curPageIndex === this.pages.length - 1;
        },
        currentMessage() {
            return this.pages[this.curPageIndex];
        }
    },
    props: ['game']
}
</script>

<style scoped>
    .currentMessage {
        margin: 10px 0 40px 10px;
    }
</style>
