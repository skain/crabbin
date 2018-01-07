import {MathUtils} from './utils/MathUtils.js';
import JobManager from './JobManager';
import WalletManager from './WalletManager';

export default class CrabbinGame {
    constructor() {
        this.start();
        this.showIntro = false;
        this.started = true;
        this.jobManager = new JobManager();
    }

    start() {
        this.showIntro = true;
        this.started = false;
        this.ended = false;
        this.currentJob = null;
        this.isGreenhorn = true;
        this.wallet = new WalletManager(40);
    }


}
