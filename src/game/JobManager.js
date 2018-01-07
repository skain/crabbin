import {MathUtils} from './utils/MathUtils';

export default class JobManager {
    generate_jobs() {
        var numJobs = MathUtils.get_random_int(5, 1);
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
    }

    static make_random_boat() {
        var boatName = 'boat' + MathUtils.get_random_int(100,1);
        var captain = 'captain' + MathUtils.get_random_int(100,1);

        var sizeRoll = MathUtils.get_random_int(100, 1);

        var boatSize = 'Large';
        var crewSize = MathUtils.get_random_int(32, 13);

        if (sizeRoll < 33) {
            boatSize = 'Small';
            crewSize = MathUtils.get_random_int(6, 3);
        } else if (sizeRoll < 66) {
            boatSize = 'Medium';
            crewSize = MathUtils.get_random_int(12, 7);
        }

        return new Boat(captain, boatName, boatSize, crewSize);
    }
}
