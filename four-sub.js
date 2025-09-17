function fourSub(arr, target) {
  arr.sort((a, b) => a - b);
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let k = j + 1;
      let l = arr.length - 1;
      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];
        if (sum === target) {
          let temp = [arr[i], arr[j], arr[k], arr[l]];
          set.add(temp.join(","));
          k++;
          l--;
          while (k < l && arr[k] === arr[k - 1]) k++;
          while (k < l && arr[l] === arr[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }

  return Array.from(set).map((str) => str.split(",").map(Number));
}

console.log(fourSub([-1, -1, -1, 2, 2, 0, 0, 0], 0));
