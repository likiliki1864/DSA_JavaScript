// Binary Search:-

// Binary search works on sorted arrays. It divides the search interval in half, reducing the time complexity to O(log n).

//Using loop:
    function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return mid;  // Return the index of the target element
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;  // Return -1 if target is not found
    }

//Using recursion:
    function binarySearchRecursive(arr, target, left, right) {
        if (left > right) {
            return -1;
        }

        let mid = Math.floor((left + right) / 2);

        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid;
        }

        // If target is greater, search the right half
        if (arr[mid] < target) 
            return binarySearchRecursive(arr, target, mid + 1, right);
        
        // If target is smaller, search the left half
        return binarySearchRecursive(arr, target, left, mid - 1);
    }

    const arr = [1, 3, 5, 7, 9, 11, 13];
    const target = 7;
    
    const BSindex = binarySearch(arr, target);
    console.log(BSindex);

    const BSRindex = binarySearchRecursive(arr, target, 0, arr.length - 1);
    console.log(BSRindex);



