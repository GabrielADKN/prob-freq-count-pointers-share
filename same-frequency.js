// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    for (let char of str1) {
        obj1[char] = (obj1[char] || 0) + 1;
    }
    for (let char of str2) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let char in obj1) {
        if (obj1[char] !== obj2[char]) {
            return false;
        }
    }
    return true;
}


module.exports = sameFrequency