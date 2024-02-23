class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }
    enqueue(val){
        var nwNode = new Node(val);
        if(!this.first){
            this.first = nwNode;
            this.last = nwNode;
        }else{
            this.last.next = nwNode;
            this.last = nwNode;
        }
    }
    dequeue(){
        if(!this.first){
            return null;
        }else{
            this.first = this.first.next;
        }
    }
    print(){
        var curr= this.first;
        var out = ''
        while(curr){
            out += `${curr.value}`;
            curr = curr.next;
        }
        console.log(out)
    }
};
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.print()
q.enqueue(50)
q.dequeue()
q.print()