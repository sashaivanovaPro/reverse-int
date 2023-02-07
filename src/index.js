module.exports = function reverse (n) {
    let str = Math.abs(n).toPrecision();
    let reverseStr = str.split("").reverse().join("")
    let reverseNum = Number(reverseStr);
    return reverseNum
}


