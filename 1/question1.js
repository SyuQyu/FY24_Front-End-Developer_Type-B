function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seen = {};

    arr.forEach(num => {
        const complement = targetSum - num;
        if (seen[complement]) {
            pairs.push([complement, num]);
        }
        seen[num] = true;
    });

    return pairs;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const targetSum = 6;
console.log(findPairsWithSum(arr, targetSum));
