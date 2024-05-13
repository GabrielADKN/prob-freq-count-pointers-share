// add whatever parameters you deem necessary
function countPairs(arr, sum) {
    let count = 0;
    let seen = new Set();

    for (let num of arr) {
        let diff = sum - num;
        if (seen.has(diff)) {
            count++;
        }
        seen.add(num);
    }
    return count;
}


module.exports = countPairs