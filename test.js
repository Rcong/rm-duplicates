'use strict'

const expect = require('chai').expect

const removeDuplicates = require('./')

describe('数组去重的测试', () => {

    it('数组单一元素重复一次，是否去重测试', () => {
        expect(removeDuplicates(['a', 'b', 'c', 'a'])).to.deep.equal(['a', 'b', 'c'])
    })

    it('数组单一元素重复多次，是否去重测试', () => {
        expect(removeDuplicates(['a', 'b', 'c', 'c', 'd'])).to.deep.equal(['a', 'b', 'c', 'd'])
    })

    it('数组多个元素重复多次，是否去重测试', () => {
        expect(removeDuplicates(['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'])).to.deep.equal(['a', 'b', 'c', 'd'])
    })

})