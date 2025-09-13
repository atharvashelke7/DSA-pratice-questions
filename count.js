function countSub(arr, k) {
  let presum = 0;
  let cnt = 0;
  let map = new Map();
  map.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    presum += arr[i];

    let remove = presum - k;

    cnt += map.get(remove) || 0;
    map.set(presum, (map.get(presum) || 0) + 1);
  }

  return cnt;
}

console.log(countSub([1, 2, 3, 1, 1, 1, 1, 3, 4, 5], 3));