class stack{
    constructor(){
        this.item = [];
    }
    push(e){
        this.item.push(e);
    }
    pop(){
        if(this.item.length === 0){
            return "underflow - stack is empty"
        }
        this.item.pop();
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[this.item.length - 1];
        }
        return 'Stack is empty'
    }
    isEmpty(){
        return this.item.length == 0
    }
}