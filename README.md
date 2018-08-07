# rm-duplicates

[![NPM](https://nodei.co/npm/rm-duplicates.png)](https://nodei.co/npm/rm-duplicates/)

一个数组去重的迷你package

## Installation

````bash
$ npm install rm-duplicates
````

## Usage

```javascript
const removeDuplicates = require('rm-duplicates')

let sourceArr = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'];
let targetArr = removeDuplicates(sourceArr);
console.info(targetArr)

//targetArr: ['a', 'b', 'c', 'd']
```
