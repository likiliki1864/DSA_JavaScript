// Selection Sort:-

// Selection Sort divides the list into two parts: the sorted part and the unsorted part.
// It repeatedly selects the smallest element from the unsorted part and swaps it with the first element of the unsorted part.

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}