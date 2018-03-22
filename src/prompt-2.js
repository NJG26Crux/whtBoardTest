// Write a function that taks an array, N, of both positive and negative integers.

// It shoould return the highest possible sum of sequential numbers.

// It should return N if undefined or null

// It should return NaN if any number in the array is NaN

function prompt_2(n) {
  if (!n) return n;

  let ans = 0
  let tempArr = n;
  // let totals = [];
  console.log('n: ', n);
  console.log('tempArr: ', tempArr);
  // console.log('totals: ', totals);

  while (tempArr) {
    let newTotal = 0;
    for (i = 0; i < tempArr.length; i++) {
      // if (!tempArr[i]) {
      //   return tempArr[i];
      // } else if (isNaN(tempArr[i])) {
      //   return NaN;
      // } else {
      //   newTotal = newTotal + tempArr[i]
      //   totals.push(newtotal);
      // }

      newTotal = newTotal + tempArr[i]
      console.log('newTotal: ', newTotal);
      // totals.push(newTotal);
      if (newTotal < ans) ans = newTotal;
      console.log('ans: ', ans);

    }
    tempArr.shift()
    // console.log('after shift tempArr: ', tempArr);
  }

  // const ans = Math.max(totals);
  return ans;
}

module.exports = prompt_2
