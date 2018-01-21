export class MathUtils {
    static get_random_int(min, max){
        let rand = Math.floor(Math.random() * (max-min));
        let plusMin = rand + min;
        return plusMin;
    }

    static get_random_ints(min, max, num_ints){
        let ints = [];
        for (let i = 0; i < num_ints; i++) {
            ints.push(MathUtils.get_random_int(min, max));
        }

        return ints;
    }

    static roll_percent_dice(percent_hit) {
        let roll = MathUtils.get_random_int(1, 100);
        return roll <= percent_hit;
    }
}
