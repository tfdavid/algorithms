// a simple implementation of rps given the number of rounds. answers "How many different ways can i play x rounds"

function rps(rounds) {
    var results = [];
    var options = ['r', 'p', 's'];

    function play(str, round) {
        if (round === 0) {
            results.push(str);
            return
        }
        else {
            for (let i = 0; i < options.length; i++) {
                play(str + options[i], round - 1);
            }
        }
    }
    play('', rounds);
    return results;

}



var a = 2;
rps(a);