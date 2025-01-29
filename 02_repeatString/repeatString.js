const repeatString = function(str, num) {
    let repeatedStr = ""
    if (num < 0) {
        repeatedStr = "ERROR"
    } else {
        for (i = 0; i < num; i++) {
            repeatedStr += str
        };
    }
    return repeatedStr
};

// Do not edit below this line
module.exports = repeatString;
