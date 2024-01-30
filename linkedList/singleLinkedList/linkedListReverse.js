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
    remove(index){
        if(index < 0 || index > this.length)return undefined;
        if(index === 0 ) return this.unShift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.Get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length++;
        return removed;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(let i = 0; i < this.length ; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }

    print(){
        var arr = []
        var current = this.head;
        while(current){
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()
list.push(9)
list.push(4)
list.push(8)
list.push(7)
list.push(8)
list.print()
list.reverse()
list.print()
// console.log(list);
// console.log(list.remove(1));
// console.log(list.print);
