function removeElement(nums: number[], val: number) : number {
    let valPositions: number[] = [];
    let k = 0; 

    for (let i=0; i<nums.length; i++) {
        if(nums[i] === val){
            valPositions.push(i);
        } else {
            k++;
            if(valPositions.length > 0) {
                nums[valPositions[0]] = nums[i];
                valPositions.push(i);
                valPositions = valPositions.slice(1);   
            }
        }
    }
    
    return k;
}

console.log("******* TEST 1 *******");
let nums: number[] = [3,2,2,3];
let val: number = 3;
let k = removeElement(nums, val);
console.log(nums);
console.log(k);

console.log("******* TEST 2 *******");
nums = [0,1,2,2,3,0,4,2];
val = 2;
k = removeElement(nums, val);
console.log(nums);
console.log(k);
