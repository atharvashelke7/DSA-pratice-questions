function subArray(arr, n) {
  let left = 0;
  let right = 0;
  let sum = arr[0];
  let maxLen = 0;

  while (right < arr.length) {
    if (left <= right && sum > n) {
      sum -= arr[left];
      left++;
    }
    if (sum === n) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
    right++;
    if (right < arr.length) sum += arr[right];
  }
  return maxLen;
}

console.log(subArray([1, 2, 3, 1, 1, 1, 1, 3, 4, 5], 3));
