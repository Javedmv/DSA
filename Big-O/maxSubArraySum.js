function maxSubArraySum(arr,num){
    if(num > arr.length) return null
    var max = -Infinity
    for(let i = 0; i < arr.length - num+1 ; i++){
        temp = 0;
        for(let j = 0 ; j < num ; j++){
            temp += arr[i+j]
        }
        if(temp > max){
            max = temp
        }
        console.log(temp , max);
    }
    return max
}
console.log(maxSubArraySum([2,6,9,4,6,2,9,9],3));