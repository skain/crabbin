import {MathUtils} from './utils/MathUtils';

export default class JobManager {
    constructor () {
        this.currentJob = null;
    }

    setJob(job) {
        this.currentJob = job;
    }

    generate_jobs() {
        var numJobs = MathUtils.get_random_int(1, 5);
        var jobs = [];
        for (var i = 0; i < numJobs; i++) {
            var boat = Boat.make_random_boat();
            var job = new Job(boat);
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

export class Boat {
    constructor(captain, name, size, crewSize) {
        this.captain = captain;
        this.name = name;
        this.size = size;
        this.crewSize = crewSize;
        this.numPots = this._get_num_pots_for_size(size);
    }

    _get_num_pots_for_size(size) {
        const lookup = {
            'Large': 85,
            'Medium': 55,
            'Small': 35
        };

        return lookup[size];
    }

    static make_random_boat() {
        var boatName = 'boat' + MathUtils.get_random_int(1,100);
        var captain = 'captain' + MathUtils.get_random_int(1, 100);

        var sizeRoll = MathUtils.get_random_int(1, 100);

        var boatSize = 'Large';
        var crewSize = MathUtils.get_random_int(13, 32);

        if (sizeRoll < 33) {
            boatSize = 'Small';
            crewSize = MathUtils.get_random_int(3, 6);
        } else if (sizeRoll < 66) {
            boatSize = 'Medium';
            crewSize = MathUtils.get_random_int(7, 12);
        }

        return new Boat(captain, boatName, boatSize, crewSize);
    }
}
