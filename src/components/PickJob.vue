<template>
    <div>
        <h1>Pick a job</h1>
        <p v-if='game.is_greenhorn'>
            OK, greenhorn. You're lucky enough to have been offered {{ available_jobs.length }} jobs! Things must really be tough up in Alaska.
            Remember, the bigger the boat the more likely it is you'll catch some crab but the lower your percentage payout will be. And this year, since
            you're a greenhorn, you'll only get 1% of the catch anyway.
        </p>
        <p>
            Choose a job from the ones below:
        </p>
        <ul>
            <li v-for='job in available_jobs'>
                <p>Boat Name: {{ job.boatName }}</p>
                <p>Boat Size: {{ job.boatSize }}</p>
                <p>Crew Size: {{ job.crewSize }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'pick-job',
    data() {
        return {
            available_jobs: this.generate_jobs()
        }
    },
    methods: {
        generate_jobs() {
            return this.game.generate_jobs();
        }
    },
    computed: {
    },
    props: ['game']
}
</script>

<style scoped>

</style>
