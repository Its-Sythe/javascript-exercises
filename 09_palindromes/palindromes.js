const palindromes = function (string) {
    reversedString = string.split("").reverse().join("");
    if (reversedString === string) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
