function maxElem(arr) {
  let cnt1 = 0, cnt2 = 0;
  let el1 = null, el2 = null;

  // 1st pass: find potential candidates
  for (let i = 0; i < arr.length; i++) {
    if (el1 === arr[i]) {
      cnt1++;
    } else if (el2 === arr[i]) {
      cnt2++;
    } else if (cnt1 === 0) {
      el1 = arr[i];
      cnt1 = 1;
    } else if (cnt2 === 0) {
      el2 = arr[i];
      cnt2 = 1;
    } else {
      cnt1--;
      cnt2--;
    }
  }

  // 2nd pass: verify actual counts
  cnt1 = 0;
  cnt2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el1) cnt1++;
    else if (arr[i] === el2) cnt2++;
  }

  let res = [];
  let min = Math.floor(arr.length / 3) + 1;

  if (cnt1 >= min) res.push(el1);
  if (cnt2 >= min) res.push(el2);

  return res;
}

// Example runs:
console.log(maxElem([3,2,3]));          // [3]
console.log(maxElem([1,1,1,3,3,2,2,2])); // [1, 2]

