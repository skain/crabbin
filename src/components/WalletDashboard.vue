<template>
    <div>
        <h2>Wallet</h2>
        <div>Cash: {{ currentCash }}</div>
        <div>
            Debts Owed:
            <ul v-if='debts.length > 0'>
                <li v-for='debt in debts'>
                    ${{ debt.amount }} to {{ debt.loaner }}
                </li>
            </ul>
            <ul v-else>
                <li>No debts here!</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'wallet-dashboard',
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {
        currentCash() {
            return this.game.wallet.cash;
        },
        debts() {
            return this.game.wallet.debts;
        }
    },
    props: ['game']
}
</script>

<style scoped>

</style>
