// Prompt #1

// Write a function called prompt_1() that takes two numbers, N and M.

// For each number, you'll increase each digit by 1 except in the case of 9
// where it will be turned into a 0.

// Then you'll add the two numbers together.

// If N or M is null retrun null

// If N or M is undefined return undefined

// if N or M is NaN return 'NaN'

// N and M must be a positive numbers

function prompt_1(n, m) {
  if (!n) return n;
  if (!m) return m;
  if (isNaN(n) || isNaN(m)) return NaN;
  // if (isNaN(m)) return m;
  if (n < 0) return 'error must be a positive number';
  if (m < 0) return 'error must be a positive number';

  const nArr = n.toString().split('');
  const mArr = m.toString().split('');

  for (i=0; i<nArr.length; i++) {
    if (nArr[i] === '9') {
      nArr[i] = 0;
    } else {
      nArr[i] = parseInt(nArr[i])+1;
    }
  }

  for (j=0; j<mArr.length; j++) {
    if (mArr[j] === '9') {
      mArr[j] = 0;
    } else {
      mArr[j] = parseInt(mArr[j])+1;
    }
  }
  const nJoined = parseInt(nArr.join(''));
  const mJoined = parseInt(mArr.join(''));

  const ans = nJoined + mJoined;

  return ans;
}

module.exports = prompt_1
