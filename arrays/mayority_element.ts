function majorityElement(nums: number[]): number {
    nums.sort(function(a, b){return a - b});
    let prev: number = NaN;
    let majority: number = Math.floor(nums.length / 2);
    let currentRepetitions: number = 1;
    let answer: number = 0;
    
    for (let current of nums) {
        if (current === prev) {
            currentRepetitions++;
        } else {
            currentRepetitions = 1;
        }

        if(currentRepetitions > majority){
            answer = current;
        }

        prev = current;
    }

    return answer;
}

let nums: number[] = [2,2,1,1,1,2,2]
console.log(majorityElement(nums));
