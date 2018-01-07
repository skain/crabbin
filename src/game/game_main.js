export default class CrabbinGame {
    constructor() {
        this.showIntro = true;
        this.started = false;
        this.ended = false;
    }

    start() {
        this.showIntro = false;
        this.started = true;
        this.ended = false;
    }
}
