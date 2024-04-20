
function naiveSearch(long, short){
    let count = 0;
    for(let i = 0 ; i < long.length ; i++){
        for(let j = 0 ; j<short.length ; j++){
            if(short[j] !== long[i+j]) break;
            if(j === short.length -1) count++;
        }
    }
    return count
}

console.log(naiveSearch("hello how are you many more to go lol how doed lol works lo land","g"));