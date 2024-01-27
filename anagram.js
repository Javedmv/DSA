function validAnagram(first,second){
    if(first.length !== second.length)return false
    const lookUp = {};

    for(let value of first){
        lookUp[value]? lookUp[value] += 1 : lookUp[value] = 1;
    }
    
    for(let value of second){
        if(!lookUp[value]){
            return false
        }else{
            lookUp[value] -= 1
        }
    }
    return true
}
console.log(validAnagram("s","s"));