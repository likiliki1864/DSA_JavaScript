// Bubble Sort:-

// Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j] , arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}
console.log(bubbleSort([1,5,2,1,5,1,6,8,2,6,8,,6,7,8,8,26,9]));