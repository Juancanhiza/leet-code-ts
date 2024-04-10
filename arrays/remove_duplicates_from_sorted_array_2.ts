function removeDuplicates2(nums: number[]): number {
    let markValue = nums[nums.length-1] + 1; // The mark value is a number greater than the max value on the array 
    let notK: number = 0; // This is the number of repetead values or marked values
    let repeatedCount = 0;

    // Mark the unwanted values
    let i=0;

    while (i < nums.length-1) {
        let currentValue = nums[i];
        let nextValue = nums[i+1];
        
        while(currentValue === nextValue){
            repeatedCount++;
            if(repeatedCount > 1){
                notK++;
                // console.log("Marked position= ", i + repeatedCount);
                // console.log("i position= ", i);
                // console.log("repeatedCount position= ", repeatedCount);
                nums[i + repeatedCount] = markValue;
            }
            nextValue = nums[i + repeatedCount + 1];
        }

        i = i + repeatedCount + 1;
        repeatedCount = 0;
    }
    // console.log("-> Marked array = ", nums);

    nums.sort(function(a, b){return a - b});
    return nums.length - notK;
};

// console.log("******** TEST 1 ********")
// let nums: number[] = [1,1,1,2,2,3];
// let k = removeDuplicates2(nums);
// console.log(nums);
// console.log(k)


console.log("******** TEST 2 ********")
let nums: number[] = [0,0,1,1,1,1,2,3,3];
let k = removeDuplicates2(nums);
console.log(nums);
console.log(k);