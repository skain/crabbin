import {MathUtils} from './utils/MathUtils';

export default class AreaManager {
    constructor() {
        this.currentArea = null;
    }

    setArea(area) {
        this.currentArea = area;
    }

    createRandomArea(mapSizeX=10, mapSizeY=10) {
        var x = MathUtils.get_random_int(1, mapSizeX);
        var y = MathUtils.get_random_int(1, mapSizeY);
        var name = 'Area' + MathUtils.get_random_int(1, 100);
        return new Area(name, x, y);
    }
}

export class Area {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;

        this.coordsString = 'X: ' + x + ' Y: ' + y;
    }


}
