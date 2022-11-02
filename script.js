let arr = ["Orange", "Banana", "Pear"];
let sorted = copySorted(arr);
function copySorted(arr) {
    return arr.slice().sort();
  }