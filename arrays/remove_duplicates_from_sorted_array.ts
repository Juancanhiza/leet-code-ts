function removeDuplicates(nums: number[]): number {
    let prevValue: number = NaN;
    let availablePositions: number [] = [];
    let k: number = 0;
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === prevValue) {
            availablePositions.push(i);
        } else {
            k++;
            prevValue = nums[i];
            if(availablePositions.length > 0) {
                nums[availablePositions[0]] = nums[i];
                availablePositions.push(i);
                availablePositions = availablePositions.slice(1); 
            }
        }
    }

    return k;
};

console.log("******** TEST 1 ********")
let nums: number[] = [1,1,2];
let k = removeDuplicates(nums);
console.log(nums);
console.log(k)

console.log("******** TEST 2 ********")
nums = [0,0,1,1,1,2,2,3,3,4];
k = removeDuplicates(nums);
console.log(nums);
console.log(k)