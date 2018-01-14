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
    constructor(name, x, y, mapSizeX=10, mapSizeY=10) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.setPlots = [];

        this.coordsString = 'X: ' + x + ' Y: ' + y;
    }

    addSetPlot(setPlot) {
        this.setPlots.push(setPlot);
    }

    createRandomSetPlots(numSetPlots) {
        for (var i = 0; i < numSetPlots; i++) {
            this.addSetPlot(SetPlot.createRandom(this.mapSizeX, this.mapSizeY));
        }
    }

}

export class SetPlot {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    toString() {
        return 'X1: ' + this.x1 + ' Y1: ' + this.y1 + ', X2: ' + this.x2 + ' Y2: ' + this.y2;
    }
    static createRandom(mapSizeX=10, mapSizeY=10) {
        var x_ints = MathUtils.get_random_ints(1, mapSizeX, 2).sort();
        var y_ints = MathUtils.get_random_ints(1, mapSizeY, 2).sort();
        return new SetPlot(x_ints[0], x_ints[1], y_ints[0], y_ints[1]);
    }
}
