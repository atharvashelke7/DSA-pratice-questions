function fourSub(arr) {
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        for (let l = k + 1; l < arr.length; l++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === 0) {
            let temp = [arr[i], arr[j], arr[k], arr[l]];
            temp.sort((a, b) => a - b);
            set.add(temp.toString());
          }
        }
      }
    }
  }

  return Array.from(set).map((str) => str.split(",").map(Number));
}

console.log(fourSub([-1, -1, -1, 2, 2, 0, 0, 0]));
