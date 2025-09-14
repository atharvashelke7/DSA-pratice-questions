function countSub(arr, k) {
  let count = 0;
  let map = new Map();
  map.set(0, 1);
  let xr = 0;
  for (let i = 0; i < arr.length; i++) {
    xr = xr ^ arr[i];
    let x = xr ^ k;
    count += map.get(x) || 0;
    map.set(xr, (map.get(xr) || 0) + 1);
  }
  return count;
}

console.log(countSub([4, 2, 2, 6, 4], 6)); // 4
