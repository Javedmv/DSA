function charChar(str){
    var result = {};
    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase()
            result[char] = ++result[char] || 1
        }
    }
    return result
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0)
    if(!(code > 46 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
        return false
    }
    return true
}
//checking with charcode is faster than using a regex pattern(55% slower) 
//using for of is better than using for
console.log(charChar("helLO12!@3"));