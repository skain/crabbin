export class MathUtils {
    static get_random_int(max, min=0){
        var rand = Math.floor(Math.random() * (max-min));
        var plusMin = rand + min;
        return plusMin;
    }

    static roll_percent_dice(percent_hit) {
        var roll = get_random_int(100);
        return roll <= percent_hit;
    }
}
