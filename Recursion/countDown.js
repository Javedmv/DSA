function countDown(num){
    if(num <= 0){
        console.log("All Down!");
        return
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(2);