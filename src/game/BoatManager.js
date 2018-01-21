import {MathUtils} from './utils/MathUtils';

export default class BoatManager {
    static make_random_boat() {
        const quotaMod = 10000;
        let boatName = 'boat' + MathUtils.get_random_int(1,100);
        let captain = 'captain' + MathUtils.get_random_int(1, 100);

        let sizeRoll = MathUtils.get_random_int(1, 100);

        let boatSize = 'Large';
        let crewSize = MathUtils.get_random_int(13, 32);
        let quota = MathUtils.get_random_int(80, 100) * quotaMod;

        if (sizeRoll < 33) {
            boatSize = 'Small';
            crewSize = MathUtils.get_random_int(3, 6);
            quota = MathUtils.get_random_int(20, 45) * quotaMod;
        } else if (sizeRoll < 66) {
            boatSize = 'Medium';
            crewSize = MathUtils.get_random_int(7, 12);
            quota = MathUtils.get_random_int(50, 75) * quotaMod;
        }

        return new Boat(captain, boatName, boatSize, crewSize, quota);
    }
}

export class Boat {
    constructor(captain, name, size, crewSize, quota) {
        this.captain = captain;
        this.name = name;
        this.size = size;
        this.crewSize = crewSize;
        this.numPots = this._get_num_pots_for_size(size);
        this.quota = quota;
    }

    _get_num_pots_for_size(size) {
        const lookup = {
            'Large': 85,
            'Medium': 55,
            'Small': 35
        };

        return lookup[size];
    }
}
