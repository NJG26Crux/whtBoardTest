const chai = require('chai')
const expect = chai.expect
const prompt_1 = require('../src/prompt-1')

describe('prompt-1', function() {
  it ('should return null, undefined or NaN if any is passed into function', function() {
    // expect(1).to.equal(1)
    let actual = prompt_1(null, 10)
    expect(actual).to.equal(null)
    actual = prompt_1(10, null)
    expect(actual).to.equal(null)
    actual = prompt_1(undefined, 10)
    expect(actual).to.equal(undefined)
    actual = prompt_1(10, undefined)
    expect(actual).to.equal(undefined)
    actual = prompt_1(10, NaN)
    expect(isNaN(actual)).to.be.true
    actual = prompt_1(NaN, 10)
    expect(isNaN(actual)).to.be.true
  })
  it ('should return input must be a positive number if either passed is negitive', function() {
    // expect(1).to.equal(1)
    let actual = prompt_1(-1, 10)
    expect(actual).to.equal('error must be a positive number')
    actual = prompt_1(10, -1)
    expect(actual).to.equal('error must be a positive number')
  })
  it ('should increase each number by 1 and add both together', function() {
    let actual = prompt_1(13, 50)
    expect(actual).to.equal(85)
    actual = prompt_1(49, 16)
    expect(actual).to.equal(77)
    actual = prompt_1(490, 12)
    expect(actual).to.equal(524)
  })
})
