/**
 * @param {number[]} nums
 * @return {number} count of good pairs
 */
const numIdenticalPairs = function(nums) {

let goodPairs = 0;

    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 1; j < nums.length; j++){
            if (i < j){
                if (nums[i] == nums[j]){
                    goodPairs = goodPairs + 1;
                }
            }
        }
    }

    return goodPairs;
};