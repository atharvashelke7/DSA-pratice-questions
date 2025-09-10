function swapGreater(arr1, arr2, ind1, ind2) {
  if (arr1[ind1] > arr2[ind2]) {
    let temp = arr1[ind1];
    arr1[ind1] = arr2[ind2];
    arr2[ind2] = temp;
  }
}

function sortedArray(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let len = n + m;

  let gap = Math.ceil(len / 2);
  while (gap > 0) {
    let left = 0;
    let right = left + gap;

    while (right < len) {
      if (left < n && right >= n) {
        swapGreater(arr1, arr2, left, right - n);
      } else if (left >= n) {
        swapGreater(arr2, arr2, left - n, right - n);
      } else {
        swapGreater(arr1, arr1, left, right);
      }
      left++, right++;
    }
    if (gap === 1) break;
    gap = Math.ceil(gap / 2);
  }
}

let arr1 = [1, 4, 7, 8, 10];
let arr2 = [2, 3, 9];
sortedArray(arr1, arr2);
console.log(arr1);
console.log(arr2);
