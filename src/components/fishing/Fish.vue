<template>
    <div>
        <h1>Fishing</h1>
        <div class='pure-g'>
            <div id='fishing-sidebar' class='pure-u-1-5'>
                <component v-bind:is='currentSidebarComponent' v-bind:fishingManager='fishingManager'></component>
            </div>
            <div id='fishing-main' class='pure-u-4-5'>
                <component v-bind:is='currentMainComponent' v-bind:fishingManager='fishingManager'></component>
            </div>
        </div>
    </div>
</template>

<script>
import FishingManager from '../../game/fishing/FishingManager'
import Sidebar from './FishingSidebar.vue'
import GetPot from './GetPot.vue'

const fishingManager = new FishingManager();

export default {
    name: 'fish',
    components: {
        'sidebar': Sidebar,
        'get-pot': GetPot
    },
    created() {
            fishingManager.isGreenhorn = this.game.isGreenhorn;
    },
    data() {
        return {
            fishingManager: fishingManager
        }
    },
    computed: {
        currentMainComponent() {
            switch(this.fishingManager.currentStage){
                case this.fishingManager.STAGES.SET_GET_POT:
                    return 'get-pot';
                default:
                    return '';
            }
        },

        currentSidebarComponent() {
            switch(this.fishingManager.currentStage){
                default:
                    return 'sidebar';
            }
        }
    },
    props: ['game']
}
</script>

<style scoped>
</style>
