/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

let numsSet = new Set();

for (let i = 0; i < nums.length; i++){
    
    let num = nums[i];

    if (numsSet.has(num)){
        return num;
    } else {
        numsSet.add(num);
    }
}

return - 1;

};