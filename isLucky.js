// see if first half of number is equal to second half

function isLucky(n) {
    n = n.toString();
    var length = (n.length / 2);

    var firstHalf = n.slice(0, length);
    var secondHalf = n.slice(length);
    var firstArray = firstHalf.split("");
    var secondArray = secondHalf.split("");
    var firstSum = null;
    var secondSum = null;
    for (var value of firstArray) {
        firstSum += parseInt(value)
    }
    for (var val of secondArray) {
        secondSum += parseInt(val)
    }
    return firstSum === secondSum
}

var n = 134008;
isLucky(n);