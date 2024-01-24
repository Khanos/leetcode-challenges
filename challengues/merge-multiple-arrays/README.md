# Code Challenge: Merge Array of Arrays

## Problem Statement

Given an array of arrays, where each inner array contains single-character strings, implement a function `mergeArrays` that returns an array of strings. Each string in the result should be a merge of all possible combinations of the values of each string inside the corresponding arrays of the input array.

## Example

```javascript
const input = [
  ['a', 'b'],
  ['1', '2'],
  ['X', 'Y'],
];

const result = mergeArrays(input);
console.log(result);
// Output: ['a1X', 'a1Y', 'a2X', 'a2Y', 'b1X', 'b1Y', 'b2X', 'b2Y']
```

## Constraints

* The input array will contain at least 1 subarray.
* Each subarray will contain at most 1 single-character string.
* The strings inside the subarrays will consist of alphanumeric characters.
* The result array should be in ASC order.

