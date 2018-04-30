function reverseParentheses(s) {

    if (! /\([a-zA-Z\s]*\)/.test(s)) {
        return s
    }

    else {
        var noParen = /\([a-zA-Z\s]*\)/.exec(s)[0]
            .replace(/[\(\)]/g, '')
            .split("").reverse().join("");

        var newString = s.replace(/\([a-zA-Z\s]*\)/, noParen);
        return reverseParentheses(newString);

    }

}
var s = "The ((quick brown fox jumps over the lazy) dog)";

reverseParentheses(s);