export default class FishingManager {
    constructor(isGreenhorn) {
        this.isGreenhorn = isGreenhorn;

        this.STATES = Object.freeze({
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

        this.currentState = this.STATES.SET;
        this.currentStage = this.STAGES.SET_GET_POT;
    }

    nextStage() {
        console.log(this.currentStage);
        switch(this.currentStage){
            case this.STAGES.SET_GET_POT:
                this.currentStage = this.STAGES.SET_BAIT_POT;
                break;
            case this.STAGES.SET_BAIT_POT:
                this.currentStage = this.STAGES.SET_SET_POT;
                break;
            case this.STAGES.SET_SET_POT:
                this.currentState = this.STATES.HAUL;
                this.currentStage = this.STAGES.HAUL_SPOT_BUOY;
                break;
            case this.STAGES.HAUL_SPOT_BUOY:
                this.currentStage = this.STAGES.HAUL_THROW_HOOK;
                break;
            case this.STAGES.HAUL_THROW_HOOK:
                this.currentStage = this.STAGES.HAUL_SET_LINE;
                break;
            case this.STAGES.HAUL_SET_LINE:
                this.currentStage = this.STAGES.HAUL_RAISE_AND_EMPTY_POT;
                break;
            case this.STAGES.HAUL_RAISE_AND_EMPTY_POT:
                this.currentStage = this.STAGES.HAUL_SORT_CRAB;
                break;
            case this.STAGES.HAUL_SORT_CRAB:
                this.currentStage = this.STAGES.HAUL_STACK_OR_SET;
                break;
            case this.STAGES.HAUL_STACK_OR_SET:
                this.currentState = this.STATES.SET;
                this.currentStage = this.STAGES.SET_BAIT_POT;
                break;
            default:
                throw 'Unrecognized stage: ' + this.currentStage;
        }
        console.log(this.currentStage);
    }
}
