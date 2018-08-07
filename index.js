'use strict'

module.exports = function removeDuplicates (sourceArr) {

    if (!Array.isArray(sourceArr)) throw new TypeError('the argument must be array');
    return [...new Set(sourceArr)];

}