function pivot (arr,start= 0,end = arr.length+1){
    function swap(array,i,j){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };
    
    var pivot = arr[start];
    var swapIdx = start;
    
    for(let i = start+1 ; i< arr.length ; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i);      
        }
    }
    swap(arr,start,swapIdx);
    return swapIdx
};
function quickSort(arr ,left = 0,right = arr.length-1){
    if(left < right){
        let pivotIndex = pivot(arr,left ,right);
        quickSort(arr,left,pivotIndex-1);
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
};
console.log(quickSort([3,5,1,2,0,888,6,43,2,4,67,4,2]))