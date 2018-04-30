// given an array of numbers, convert them to all possible letters
// that can be made using every letter in the array
// sample input = [1,2,3]
// sample output = ['abc', 'aw', 'lc']

function letterPerm(arr) {

    let result = [];
    function getPerms(str, letters) {
        if (str.length === 0) {
            result.push(letters);
        }
        else {
            let newLetter1 = str.slice(0, 1);
            let newStr1 = str.slice(1);

            let newLetter2 = str.slice(0, 2);
            let newStr2 = str.slice(2);

            var letter1 = convert(newLetter1);
            var letter2 = convert(newLetter2);

            if (letter1) {
                getPerms(newStr1, letters + letter1);
            }
            if (letter2 && str.length !== 1) {
                getPerms(newStr2, letters + letter2)
            }
        }
    }
    getPerms(arr, '');
    return result;
}

function convert(str) {
    str = str.join('');
    if (+str <= 0 || +str > 26) {
        return false
    }
    else {
        return String.fromCharCode(+str + 96);
    }
}



var a = [1, 2, 1, 4];

letterPerm(a);