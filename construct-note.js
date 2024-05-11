// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterCount = {};

    for (let char of letters) {
        if (letterCount[char]) {
            letterCount[char]++;
        } else {
            letterCount[char] = 1;
        }
    }
    console.log(letterCount)

    // Check if each character in 'message' can be constructed using 'letters'
    for (let char of message) {
        if (!letterCount[char]) {
            return false;
        }
        letterCount[char]--;
    }

    return true;
}


module.exports = constructNote;