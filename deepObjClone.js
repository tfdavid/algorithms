function clone(obj) {
    let result = Array.isArray(obj) ? [] : {};

    for (let item in obj) {
        if (typeof obj[item] === 'object') {
            result[item] = clone(obj[item])
        }
        else {
            result[item] = obj[item];
        }
    }
    return result;
}


var a = { 'person': { 'james': [1, 2, 4, '232', 2], 'bob': 42 } };
var b = { 'name': 'taylor' };
var c = { 'hello': 'hi' };

clone(a);