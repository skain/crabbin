export default class FishingManager {
    constructor() {
        this.GAME_STATES = Object.freeze([
            'SET',
            'HAUL'
        ]);

        this.STAGES = Object.freeze([
            'SET_GET_POT',
            'SET_BAIT_POT',
            'SET_SET_POT',
            'HAUL_SPOT_BUOY',
            'HAUL_THROW_HOOK',
            'HAUL_SET_LINE',
            'HAUL_RAISE_AND_EMPTY_POT',
            'HAUL_SORT_CRAB',
            'HAUL_STACK_OR_SET'
        ]);

        this.currentState = this.GAME_STATES[0];
        this.currentStage = this.STAGES[0];
    }
}
