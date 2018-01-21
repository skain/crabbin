export default class FishingManager {
    constructor() {
        this.GAME_STATES = Object.freeze({
            SET: 'SET',
            HAUL: 'HAUL'
        });

        this.STAGES = Object.freeze({
            SET_GET_POT: 'SET_GET_POT',
            SET_BAIT_POT: 'SET_BAIT_POT',
            SET_SET_POT: 'SET_SET_POT',
            HAUL_SPOT_BUOY: 'HAUL_SPOT_BUOY',
            HAUL_THROW_HOOK: 'HAUL_THROW_HOOK',
            HAUL_SET_LINE: 'HAUL_SET_LINE',
            HAUL_RAISE_AND_EMPTY_POT: 'HAUL_RAISE_AND_EMPTY_POT',
            HAUL_SORT_CRAB: 'HAUL_SORT_CRAB',
            HAUL_STACK_OR_SET: 'HAUL_STACK_OR_SET'
        });

        this.currentState = this.GAME_STATES['SET'];
        this.currentStage = this.STAGES['SET_GET_POT'];
    }
}
