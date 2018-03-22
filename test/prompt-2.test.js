const chai = require('chai')
const expect = chai.expect
const prompt_2 = require('../src/prompt-2')

describe('prompt-2', function() {
  it ('should return null, undefined or NaN if any is passed into function', function() {
    // expect(1).to.equal(1)
    let actual = prompt_2(null)
    expect(actual).to.equal(null)
    actual = prompt_2(undefined)
    expect(actual).to.equal(undefined)
    actual = prompt_2(NaN)
    expect(isNaN(actual)).to.be.true
    // actual = prompt_2(10, 3, 5, NaN, 10)
    // expect(isNaN(actual)).to.be.true
  })
  it ('should return highest possible sum', function() {
    let actual = prompt_2([-9, 9, 0, 1, -3])
    expect(actual).to.equal(10)
    actual = prompt_2(-[9, 12, -5, 9, 0, 1, -3])
    expect(actual).to.equal(17)
  })
})
