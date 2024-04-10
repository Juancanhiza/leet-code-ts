function rotate (nums: number [], k: number): void {
    let n = nums.length;
    if (n <= 1){
        return
    }
    
    let aux: number [] = [...nums];
    let maxIndex: number = nums.length - 1;

    for (let i = 0; i < aux.length; i++) {
        if (k > n) {
            k = k % n;
        }
        let newIndex = i + k > maxIndex ? i + k - nums.length : i + k;
        nums[newIndex] = aux[i];
    }
}



let nums: number[] = [1,2,3,4,5,6,7];
let k: number = 3;
rotate(nums, k);
console.log(nums);

// let nums: number[] = [1,2];
// let k: number = 3;
// rotate(nums, k);
// console.log(nums);