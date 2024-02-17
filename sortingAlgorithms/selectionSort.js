function selectionSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        let min = i;
        for(let j = i+1 ; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){
            var temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
const arr = [1,66,4,33,22,55,88,99,7,533,22,22]
console.log(selectionSort(arr));