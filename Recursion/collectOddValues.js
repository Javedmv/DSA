function collectOddValues(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

console.log(collectOddValues([2,2,3,4,6,5,4,3,2,1,3,5,6,7,8,8]));