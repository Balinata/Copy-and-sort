let arr = ["Orange", "Grapefruit", "Pear"];
let sorted = copySorted(arr);
function copySorted(arr) {
    return arr.slice().sort();
  }
  alert(sorted);
  alert(arr);