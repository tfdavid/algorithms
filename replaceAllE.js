// Given a string replace all instances of 2 instances of the letter 'e'(lowercase only) with one 'e'
// sample input: 'Freeze'
// sample output: "Freze"
// sample input: "Yeeeeeee"
// sample output: "Ye"

function replaceLetter(str) {
    return str.replace(/e{2,}/g, 'e')
}

// recusrively w/o regex
function replaceNoRegex(str) {
    if ((pos = str.indexOf('ee')) !== -1) {
        str = str.slice(0, pos) + str.slice(pos + 1);
        str = replaceNoRegex(str);
    }
    return str
}

var a = 'heeelleeo';
replaceNoRegex(a);
