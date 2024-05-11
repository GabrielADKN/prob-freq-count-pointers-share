// add whatever parameters you deem necessary
function separatePositive(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] > 0) {
            start++;
        } else if (arr[end] < 0) {
            end--;
        } else {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return arr;
}

module.exports = separatePositive
