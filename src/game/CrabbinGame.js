import {MathUtils} from './utils/MathUtils.js';
import JobManager from './JobManager';
import WalletManager from './WalletManager';
import AreaManager from './AreaManager';
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
        this.areaManager = new AreaManager();
        this.GameStates = Object.freeze({
            INTRO: 'INTRO',
            PICK_JOB: 'PICK_JOB',
            PICK_AREA: 'PICK_AREA',
            CHOOSE_SETS: 'CHOOSE_SETS',
            FISH: 'FISH'
        });

        this.start();
    }

    start() {
        // this.gameState = this.GameStates.INTRO;
        this.gameState = this.GameStates.PICK_JOB;
        this.ended = false;
        this.jobManager.setJob(null);
        this.isGreenhorn = true;
        this.wallet = new WalletManager(40);
        this._setDebugGameState();
    }

    _setDebugGameState() {
        this.gameState = this.GameStates.FISH;
        this.jobManager.setJob(this.jobManager.generate_job());
    }

    nextGameState() {
        let nextState = null;
        switch (this.gameState) {
            case this.GameStates.INTRO:
                nextState = this.GameStates.PICK_JOB;
                break;
            case this.GameStates.PICK_JOB:
                nextState = this.GameStates.PICK_AREA;
                break;
            case this.GameStates.PICK_AREA:
                nextState = this.GameStates.CHOOSE_SETS;
                break;
            case this.GameStates.CHOOSE_SETS:
                nextState = this.GameStates.FISH;
                break;
            case this.GameStates.FISH:
                nextState = this.GameStates.PICK_JOB;
                break;
            default:
                throw 'Unrecognized game state: ' + this.gameState;
        }

        this.gameState = nextState;

    }

    setJob(job) {
        this.jobManager.setJob(job);
        this.nextGameState();
    }
}
