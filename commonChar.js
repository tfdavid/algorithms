function commonCharacterCount(s1, s2) {

    for (var value of s1) {
        s2 = s2.replace(value, "!");
    }

    return s2.replace(/[^!]/g, "").length;
}



var s1 = "aabcc";
var s2 = "adcaa"

commonCharacterCount(s1, s2)