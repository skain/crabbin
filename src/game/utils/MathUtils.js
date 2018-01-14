export class MathUtils {
    static get_random_int(min, max){
        var rand = Math.floor(Math.random() * (max-min));
        var plusMin = rand + min;
        return plusMin;
    }

    static get_random_ints(min, max, num_ints){
        var ints = [];
        for (var i = 0; i < num_ints; i++) {
            ints.push(MathUtils.get_random_int(min, max));
        }

        return ints;
    }

    static roll_percent_dice(percent_hit) {
        var roll = MathUtils.get_random_int(1, 100);
        return roll <= percent_hit;
    }
}
