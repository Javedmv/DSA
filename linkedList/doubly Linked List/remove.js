class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;         
    }
    push(val){
        var newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var oldTail = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail
    }
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;  
        }
        this.length--;
        return oldHead;
    }
    unShift(val){
        var newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    Get(index){
        if(index < 0 || index >= this.length)return null;
        if(index <= this.length / 2){
            var count = 0;
            var current = this.head;
            while(count !== index){
                count++;
                current = current.next;
            }
            return current
        }else{
            var count = this.length - 1;
            var current = this.tail;
            while(count !== index){
                count--;
                current = current.prev;
            }
            return current

        }
    }
    set(index,val){
        var foundNode = this.Get(index);
        if(foundNode != null){
            foundNode.value = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length)return false;
        if(index === 0)return this.unShift(val)
        if(index === this.length) return this.push(val)

        var newNode = new Node(val)
        var foundNode = this.Get(index - 1)
        var next = foundNode.next

            foundNode.next = newNode, newNode.prev = foundNode;
            newNode.next = next, next.prev = newNode;
            this.length++;
            return true;
    }
    remove(index){
        if(index < 0 || index > this.length)return false;
        if(index === 0)return this.shift(index)
        if(index === this.length-1) return this.pop(index);
        var remove = this.Get(index);

        var prevRemove = remove.prev;
        var nextRemove = remove.next;
        prevRemove.next = null;
        nextRemove.prev = null;
        prevRemove.next = nextRemove
        nextRemove.prev = prevRemove
        
        this.length--;
        return remove
    }
    print(){
        var arr = [];
        var current = this.head
        for(var i = 0 ; i < this.length ; i++){
            arr.push(current.value);
            current = current.next
        }
        console.log(arr);
    }
}

var list = new doublyLinkedList()
list.push(8)
list.push(7)
list.push(6)
list.push(5)
list.push(4)
list.push(3)
list.push(2)
list.print()
list.remove(2)
list.print()