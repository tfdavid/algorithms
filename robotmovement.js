// Say you are a robot receiving directions to move.
// Given a string of Movement(F) and/or rotations(R,L) find out if the sequence would result in you  moving in an infinite loop if you were to execute the command over and over. 

// sample input: "FR" output: true   "forward, rotateRight" x4 puts you back at the start
// input: "F" would result in output: false, since you would only move forward forever


function isInfinite(str) {
    // we want to run the command 4 times to account for perfect loop completion
    let commands = str.repeat(4);
    let directions = ['N', 'E', 'S', 'W'];

    // direction that corresponds with the array position
    let currentDirection = 0;
    let x = 0;
    let y = 0;

    
    for (let command of commands) {

        if (command === "R") {
            currentDirection = (1 + currentDirection) % 4
        }
        else if (command === "L") {
            currentDirection = (3 + currentDirection) % 4
        }
        else {
            switch (directions[currentDirection]) {
                case "N":
                    y++;
                    break;
                case "E":
                    x++;
                    break;
                case "S":
                    y--;
                    break;
                case "W":
                    x--;
                    break;
                default:
                    break;
            }
        }
        console.log(directions[currentDirection], x, y)
    }
    return x === 0 && y === 0;

}



let input = 'FRFRLLFR';

isInfinite(input);