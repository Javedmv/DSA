class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head)return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = newTail.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.tail =null;
            this.head =null;
        }
        return current
    }
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return oldHead;
    }
    unShift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    Get(index){
        if(index < 0 || index >= this.length)return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            counter++;
            current = current.next;
        }
        return current
    }
    Set(index,val){
        if(index < 0 || index >= this.length)return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            counter++
            current = current.next
        }
        current.value = val
        return this;
    }
    insert(index,val){
        if(index < 0 || index > this.length) return false
        if(index === this.length)return !!this.push(val);
        if(index === 0) return !!this.unShift(val);

        var newNode = new Node(val)
        var prev = this.Get(index - 1)
        var temp = prev.next
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true
    }
}
var list = new SinglyLinkedList()
list.push(9)
list.insert(0,4)
list.insert(1,8)
console.log(list.Get(1));
list.insert(1,7)