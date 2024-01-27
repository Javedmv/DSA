function addUpTon(n){
    let total = 0
    for(let i = 1; i <= n ; i++){
        total += i
    }
    return total
};

var t1 = performance.now();
addUpTon(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds. Add1`)

// console.log(addUpTon(6));