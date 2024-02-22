
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
    }
    push(val){
        var nwNode = new Node(val);
        if(!this.top){
            this.top = nwNode;
        }else{
            var curr = this.top;
            this.top = nwNode;
            this.top.next = curr;
        }
    }
    pop(){
        if(!this.top){
            return null;
        }else{
            this.top = this.top.next;
        }
    }
    print(){
        var curr = this.top;
        var res = ''
        while(curr){
            res += `${curr.value}`
            curr = curr.next;
        }
        console.log(res)
    }
}

let s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.print()
s.pop()
s.print()