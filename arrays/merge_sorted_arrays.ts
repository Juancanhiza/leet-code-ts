function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let lastIndex: number = m+n-1;
    m = m-1; //Indice final en nums1
    n = n-1; //Indice final en nums2

    for (let i=lastIndex; i>=0; i--) {
        if(m >= 0 && n >= 0){
            if(nums1[m] > nums2[n]) {
                nums1[i] = nums1[m];
                m--;
            } else {
                nums1[i] = nums2[n];
                n--;
            }
        } else {
            if(m < 0) {
                nums1[i] = nums2[n];
                n--;
            } else if (n < 0) {
                nums1[i] = nums1[m];
                m--;
            }
        }
    }
};

let nums1: number[] = [];
let m: number = 0;
let nums2: number[] =[];
let n: number = 0;

nums1 = [1,2,3,0,0,0];
m = 3;
nums2 = [2,5,6];
n = 3;


console.log("******** TEST 1 ********")
merge(nums1, m, nums2, n);
console.log(nums1);


nums1 = [1];
m = 1;
nums2 = [];
n = 0;


console.log("******** TEST 2 ********")
merge(nums1, m, nums2, n);
console.log(nums1);

nums1 = [];
m = 0;
nums2 = [1];
n = 1;

console.log("******** TEST 3 ********")
merge(nums1, m, nums2, n);
console.log(nums1);