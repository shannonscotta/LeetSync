/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++){
        if (hashMap.has(nums[i])){
            hashMap.delete(nums[i])
        } else {
            hashMap.set(nums[i], nums[i]);
        }
    }
   
    let temp = hashMap.keys();
    let result = [...temp];
    return result;
    
};