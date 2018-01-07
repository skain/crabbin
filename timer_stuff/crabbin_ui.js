class CrabbinUI {
    constructor(crabbinSim, elapsedP) {
        console.log(crabbinSim);
        this.crabbinSim = crabbinSim;
        this.elapsedP = elapsedP;
    }

    render() {
        this.elapsedP.innerHTML = this.crabbinSim.elapsed;
    }
}
