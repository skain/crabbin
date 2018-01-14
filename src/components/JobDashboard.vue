<template>
    <div>
        <h2>Current Job</h2>
        <div v-if='currentJob'>
            <div>Boat: {{ currentJob.boat.name }}</div>
            <div>Captain: {{ currentJob.boat.captain }}</div>
            <div>Size: {{ currentJob.boat.size }}</div>
            <div>Crew Size: {{ currentJob.boat.crewSize }}</div>
            <div>Pots: {{ currentJob.boat.numPots}}</div>
            <div>Quota: {{ currentJob.boat.quota }}</div>
        </div>
        <div v-else>
            You are not currently working a job.
        </div>
    </div>
</template>

<script>
export default {
    name: 'job-dashboard',
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        currentJob() {
            return this.game.jobManager.currentJob;
        }
    },
    props: ['game']
}
</script>

<style scoped>

</style>
