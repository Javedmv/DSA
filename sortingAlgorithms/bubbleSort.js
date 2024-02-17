function bubbleSort(arr){
    let swapped;
    for(let i = arr.length -1 ; i > 0 ; i++){
        swapped = true;
        for(let j = 0 ; j < i - 1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = false;
            }
        }
        if(swapped)break;
    }
};
var arr = [5,6,3,2,1,7,8,99,7,6,55];
bubbleSort(arr);
console.log(arr)
