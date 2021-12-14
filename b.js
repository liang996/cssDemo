var arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];
let bj = []
for (let i = 0; i < arr.length; i++) {
  if (bj.indexOf(arr[i]) == -1) {
    bj.push(arr[i]);

  }
}