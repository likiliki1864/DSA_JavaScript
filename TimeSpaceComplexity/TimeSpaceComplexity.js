const array = [5, 3, 8, 1, 2];
// O(1) - Constant Time
function getFirstElement(arr) {
    return arr[0]; // Always takes the same time
  }
  
  // O(n) - Linear Time
  function printAll(arr) {
    arr.forEach(element => console.log(element)); // Processes each element once
  }
  
  // O(n²) - Quadratic Time
  function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]); // Nested loops, O(n²)
      }
    }
  }
  
  // O(log n) - Logarithmic Time
  function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) return mid; // Found the target
      else if (arr[mid] < target) left = mid + 1; // Search in right half
      else right = mid - 1; // Search in left half
    }
    
    return -1; // Target not found
  }
  
  // O(n log n) - Linearithmic Time (Merge Sort)
  function mergeSort(arr) {
    if (arr.length < 2) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
  }
  
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
 
 
  console.log("O(1)", getFirstElement(array));
  console.log("O(n)");
  printAll(array);
  console.log("O(n²)");
  printPairs(array); 
  console.log("O(log n)", binarySearch(array.sort((a, b) => a - b), 2));
  console.log("O(n log n)", mergeSort(array));
  
  