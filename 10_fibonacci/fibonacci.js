const fibonacci = function(index) {
    let fibArray = [0, 1, 1];
    for (i = 3; i < 50; i++){
        fibArray.push(fibArray[(i-1)] + fibArray[(i-2)])
    };
    if (parseInt(index) < 0) {
        return "OOPS"
    } else {
        return fibArray[parseInt(index)]
    }
};

// Do not edit below this line
module.exports = fibonacci;
