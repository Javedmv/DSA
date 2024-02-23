class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.rear = -1;
        this.front = -1;
        this.currentLength = 0;
        this.capacity = capacity
    }
    ifFull(){
        return this.currentLength == capacity;
    }
    isEmpty(){
        return this.currentLength ==0;
    }
    size(){
        return this.currentLength;
    }
    enqueue(item){
        if(!isFull){
            this.rear = (this.rear +1) % this.capacity;
            this.items[this.rear] = item;
            this.currLength++;
            if(this.front == -1) this.front == this.rear;
        }else{
            console.log('queue is already full');
        }
    }
    dequeue(){
        if(this.isEmpty())return 'Queue is empty'
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front+1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return item
    }
}