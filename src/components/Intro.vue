<template>
    <div>
        <h1>Welcome to Crabbin'!</h1>
        <div>
            {{ currentMessage }}
        </div>
        <div>
            <button class="pure-button" v-on:click="previous" v-bind:disabled="isFirstPage">Prev</button>
            <button class="pure-button" v-on:click="next" v-bind:disabled="isLastPage">Next</button>
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
                'this is page 1',
                'this is page 2'
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
    }
}
</script>

<style>

</style>
