function longestUniqueSubarray(arr) {
  let set = new Set();
  let left = 0,
    maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    while (set.has(arr[right])) {
      set.delete(arr[left]); // shrink window
      left++;
    }
    set.add(arr[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Example
console.log(longestUniqueSubarray([1, 2, 3, 1, 2, 3, 4, 5])); // 5  -> [1,2,3,4,5]
