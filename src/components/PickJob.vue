<template>
    <div>
        <h1>Pick a job</h1>
        <p v-if='game.is_greenhorn'>
            OK, greenhorn. You're lucky enough to have been offered {{ availableJobs.length }} jobs! Things must really be tough up in Alaska.
            Remember, the bigger the boat the more likely it is you'll catch some crab but the lower your percentage payout will be. And this year, since
            you're a greenhorn, you'll only get 1% of the catch anyway.
        </p>
        <p>
            Choose a job from the ones below:
        </p>
        <ul>
            <li v-for='job in availableJobs' v-on:click='selectJob(job)' v-bind:class='{ selected: job === selectedJob }'>
                <div>Boat: {{ job.boat.name }}</div>
                <div>Captain: {{ job.boat.captain }}</div>
                <div>Size: {{ job.boat.size }}</div>
                <div>Crew Size: {{ job.boat.crewSize }}</div>
                <div>Pots: {{ job.boat.numPots}}</div>
                <div>Quota: {{ job.boat.quota }}</div>

            </li>
        </ul>
        <div v-if='selectedJob'>
            <p>
                You've selected the {{ selectedJob.boat.name }}. It's a fine ship.
            </p>
            <p>
                <button v-on:click='setSelectedJob'>Sign up!</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pick-job',
    data() {
        return {
            availableJobs: this.generate_jobs(),
            selectedJob: null
        }
    },
    methods: {
        generate_jobs() {
            return this.game.jobManager.generate_jobs();
        },
        selectJob(job) {
            this.selectedJob = job;
        },
        setSelectedJob() {
            this.game.setJob(this.selectedJob);
        }
    },
    computed: {
    },
    props: ['game']
}
</script>

<style scoped>
    li {
        padding: 10px;
    }
    li.selected {
        background-color: #ffb5b5;
    }
</style>
