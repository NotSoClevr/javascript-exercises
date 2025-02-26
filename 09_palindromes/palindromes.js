const palindromes = function (str) {
    //const punctuation = /[\.,?!]/g;
    const uniform = str
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .toString();
    const reversed = uniform.split("").reverse().join("").toString();
    console.log(uniform);
    console.log(reversed);
    if (uniform === reversed) {
        return true
    }else {return false}
    
};

// Do not edit below this line
module.exports = palindromes;
