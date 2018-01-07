<template>
    <div>
        <job-dashboard v-bind:game='game'></job-dashboard>
        <wallet-dashboard v-bind:game='game'></wallet-dashboard>
    </div>
</template>

<script>
import JobDashboard from './JobDashboard.vue'
import WalletDashboard from './WalletDashboard.vue'


export default {
    name: 'sidebar-dashboard',
    components: {
        'job-dashboard': JobDashboard,
        'wallet-dashboard': WalletDashboard
    },
    data() {
        return {
            emptyJob: { boatName: 'NONE', crewSize: 0 }
        }
    },
    methods: {

    },
    computed: {
        currentJob() {
            console.log(this.game.currentJob, this.emptyJob, this.test);
            return this.game.currentJob || this.emptyJob;
        }
    },
    props: ['game']
}
</script>

<style scoped>

</style>
