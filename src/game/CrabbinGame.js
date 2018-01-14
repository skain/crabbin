import {MathUtils} from './utils/MathUtils.js';
import JobManager from './JobManager';
import WalletManager from './WalletManager';
/*
 * Pick a Job (if not owner)
 * Pick an area
 * Choose set lines
 * Set
    * Grab pot off stack
    * Bait pot
    * Set pot
 * Haul
    * Spot buoy
    * Throw hook/set the line
    * Raise/empty pot
    * Sort crab/get count
    * Stack or set
*/
export default class CrabbinGame {
    constructor() {
        this.jobManager = new JobManager();
        this.GameStates = Object.freeze({
            INTRO: 1,
            PICK_JOB: 2,
            PICK_AREA: 3,
            CHOOSE_SET: 4,
            SET: 5,
            HAUL: 6
        });

        this.start();
    }

    start() {
        this.gameState = this.GameStates.INTRO;
        this.ended = false;
        this.currentJob = null;
        this.isGreenhorn = true;
        this.wallet = new WalletManager(40);
    }

    nextGameState() {
        var nextState = null;
        switch (this.gameState) {
            case this.GameStates.INTRO:
                nextState = this.GameStates.PICK_JOB;
                break;
            case this.GameStates.PICK_JOB:
                nextState = this.GameStates.PICK_AREA;
                break;
            case this.GameStates.PICK_AREA:
                nextState = this.GameStates.CHOOSE_SET;
                break;
            case this.GameStates.CHOOSE_SET:
                nextState = this.GameStates.SET;
                break;
            case this.GameStates.SET:
                nextState = this.GameStates.HAUL;
                break;
            case this.GameStates.HAUL:
                nextState = this.GameStates.INTRO;
                break;
            default:
                throw 'Unrecognized game state: ' + this.gameState;
        }

        this.gameState = nextState;

        console.log(this.gameState);
    }

    setJob(job) {
        this.currentJob = job;
        this.gameState = this.GameStates.PICK_AREA;
    }
}
