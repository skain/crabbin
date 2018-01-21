<template>
    <div>
        <h1>Fishing</h1>
        <div class='pure-g'>
            <div id='fishing-sidebar' class='pure-u-1-5'>
                <div class='fishing-container'>
                    <component v-bind:is='currentSidebarComponent' v-bind:fishingManager='fishingManager'></component>
                </div>
            </div>
            <div id='fishing-main' class='pure-u-4-5'>
                <div class='fishing-container'>
                    <component v-bind:is='fishingManager.currentStage' v-bind:fishingManager='fishingManager'></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FishingManager from '../../game/fishing/FishingManager'
import Sidebar from './FishingSidebar.vue'
import GetPot from './Set/GetPot.vue'
import BaitPot from './Set/BaitPot.vue'
import SetPot from './Set/SetPot.vue'
import SpotBuoy from './Haul/SpotBuoy.vue'
import ThrowHook from './Haul/ThrowHook.vue'
import SetLine from './Haul/SetLine.vue'
import RaiseAndEmpty from './Haul/RaiseAndEmpty.vue'
import SortCrab from './Haul/SortCrab.vue'
import StackOrReset from './Haul/StackOrReset.vue'


const fishingManager = new FishingManager();

export default {
    name: 'fish',
    components: {
        'sidebar': Sidebar,
        'SET_GET_POT': GetPot,
        'SET_BAIT_POT': BaitPot,
        'SET_SET_POT': SetPot,
        'HAUL_SPOT_BUOY': SpotBuoy,
        'HAUL_THROW_HOOK': ThrowHook,
        'HAUL_SET_LINE': SetLine,
        'HAUL_RAISE_AND_EMPTY_POT': RaiseAndEmpty,
        'HAUL_SORT_CRAB': SortCrab,
        'HAUL_STACK_OR_SET': StackOrReset
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
    div.fishing-container {
        padding: 10px;
    }

    #fishing-sidebar div.fishing-container {
        padding-right: 20px;
    }
</style>
