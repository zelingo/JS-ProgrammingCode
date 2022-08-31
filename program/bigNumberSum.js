export default function bigNumberSum(n1, n2) {
  let total = [];
  let max = 100 || Number.MAX_VALUE;
  if (n1 > max && n2 > max) {
    (n1 = String(n1)), (n2 = String(n2));
    let len = n1.length >= n2.length ? n2.length : n1.length;
    // let getUnitNum = (n) =>
    let i = 0;
    while (i < len) {
      let u1 = Number(n1.substr(n1.length - 1 - i, 1));
      let u2 = Number(n2.substr(n2.length - 1 - i, 1));
      let currInd = len - i;
      let sum = total[currInd] ? u1 + u2 + total[currInd] : u1 + u2;
      if (sum > 9) {
        total[len - 1] = sum - 10;
        total[len - 2] = 1;
      }
      total[currInd] = sum;
      i++;
    }
  } else {
    total = unitSum(n1, n2);
  }
  console.log(total);
}
