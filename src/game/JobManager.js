import {MathUtils} from './utils/MathUtils';
import BoatManager from './BoatManager';

export default class JobManager {
    constructor () {
        this.currentJob = null;
    }

    setJob(job) {
        this.currentJob = job;
    }

    generate_job() {
        let boat = BoatManager.make_random_boat();
        let job = new Job(boat);
        return job;
    }

    generate_jobs() {
        let numJobs = MathUtils.get_random_int(1, 5);
        let jobs = [];
        for (let i = 0; i < numJobs; i++) {
            let job = this.generate_job();
            jobs.push(job);
        }
        return jobs;
    }
}

export class Job {
    constructor(boat) {
        this.boat = boat;
    }
}
