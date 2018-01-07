import {MathUtils} from './utils/math_utils.js';

export default class CrabbinGame {
    constructor() {
        this.start();
        this.showIntro = false;
        this.started = true;
    }

    start() {
        this.showIntro = true;
        this.started = false;
        this.ended = false;
        this.currentJob = null;
        this.isGreenhorn = true;
        this.wallet = {
            cash: 40.00,
            debts: []
        };
    }

    generate_jobs() {
        var numJobs = MathUtils.get_random_int(5, 1);
        var jobs = [];
        for (var i = 0; i < numJobs; i++) {
            jobs.push(this._make_job(i));
        }

        return jobs;
    }

    _make_job(index) {
        var job = {
            boatName: 'boat' + (index + 1)
        };

        var sizeRoll = MathUtils.get_random_int(100, 1);
        console.log('sizeRoll', sizeRoll);
        if (sizeRoll < 33) {
            job.boatSize = 'Small';
            job.crewSize = MathUtils.get_random_int(6, 3);
        } else if (sizeRoll < 66) {
            job.boatSize = 'Medium';
            job.crewSize = MathUtils.get_random_int(12, 7);
        } else {
            job.boatSize = 'Large';
            job.crewSize = MathUtils.get_random_int(32, 13);
        }

        return job;
    }
}
