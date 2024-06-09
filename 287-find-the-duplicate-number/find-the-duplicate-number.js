/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {

//[3,1,3,4,2]

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