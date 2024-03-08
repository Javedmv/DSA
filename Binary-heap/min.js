class Minheap{
    constructor(){
        this.heap = [];
    }
    
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }

    getLeftChildIndex(index){
        return 2*index+1;
    }

    getRightChildIndex(index){
        return 2*index+1;
    }

    swap(index1,index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    insert(val){
        this.heap.push(val);
        this.heapifyUp(this.heap.length-1);
    }

    heapifyUp(index){
        let parentIndex = this.getParentIndex(index);
        if(parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]){
            this.swap(index,parentIndex);
            this.heapifyUp(parentIndex);
        } 
    }

    remove(){
        if(this.heap.length === 0){
            return null;
        }
        if(this.heap.length === 1){
            return this.heap.pop();
        }
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min
    }

    heapifyDown(index){
        let LeftChildIndex = this.getLeftChildIndex;
        let rightChildIndex = this.getRightChildIndex;
        let minIndex = index;
        if(LeftChildIndex < this.heap.length && this.heap[LeftChildIndex] < this.heap[minIndex]){
            minIndex = LeftChildIndex;
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]){
            minIndex = rightChildIndex
        }
        if(minIndex !== index){
            this.swap(minIndex,index);
            this.heapifyDown(minIndex);
        }
    }

    heapSort(arr){
        let sortedArr = []
        while(this.heap.length > 0){
            sortedArr.push(this.remove());
        }
        return sortedArr
    }
}