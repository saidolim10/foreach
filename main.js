const arr = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
const fivePass = [];
const fiveFall = [];

arr.forEach((e) => {
  if (e.includes('n') ) {
    fivePass.push(e);
  } else {
    fiveFall.push(e);
  }
});

console.log(arr, 'HAMMASI');
console.log(fivePass, 'N HARFI BORI');
