// add whatever parameters you deem necessary
function isSubsequence(arr1, arr2) {
    let subIndex = 0;
    let seqIndex = 0;

    while (seqIndex < arr2.length) {
        if (arr2[seqIndex] === arr1[subIndex]) {
            subIndex++;
        }
        if (subIndex === arr1.length) {
            return true;
        }
        seqIndex++;
    }
    return false;
}


module.exports = isSubsequence