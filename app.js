function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function nextPermutation(arr) {
  let ind = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      ind = i;
      break;
    }
  }

  if (ind === -1) {
    reverse(arr, 0, arr.length - 1);
    return arr;
  }

  for (let i = arr.length - 1; i > ind; i--) {
    if (arr[i] > arr[ind]) {
      [arr[i], arr[ind]] = [arr[ind], arr[i]];
      break;
    }
  }
  reverse(arr, ind + 1, arr.length - 1);
  return arr;
}

console.log(nextPermutation([1, 2, 3]));
