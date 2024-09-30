// Linear Search:-

// Linear search iterates through each element in the array to find the target element.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Return the index of the target element
        }
    }
    return -1;  // Return -1 if target is not found
}