/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r) {
        if (nums[l] === val) {
            nums[l] = nums[r];
            r--;
        } else {
            l++;
        }
    }
    return l;
};

var removeElement2 = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

export {
    removeElement,
    removeElement2,
}