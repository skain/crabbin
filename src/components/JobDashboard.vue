<template>
    <div>
        <h2>Current Job</h2>
        <div>Boat: {{ currentJob.boatName }}</div>
        <div>Crew Size: {{ currentJob.crewSize }}</div>
    </div>
</template>

<script>
export default {
    name: 'job-dashboard',
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
