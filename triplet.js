function triplet(arr) {
  arr.sort((a, b) => a - b); // Correct numeric sort
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        ans.push([arr[i], arr[left], arr[right]]); // Push the triplet
        left++;
        right--;
        while (left < right && arr[left] == arr[left - 1]) left++;
        while (left < right && arr[right] == arr[right + 1]) right--;
      }
    }
  }
  return ans;
}

console.log(triplet([-1, -1, -1, 2, 2, 0, 0, 0]));