class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        var nwNode = new Node(value);
        if(!this.root){
            this.root = nwNode;
            return this;
        }
        var curr = this.root;
        while(true){
            if(value === curr.value)return undefined;
            if(value < curr.value){
                if(!curr.left){
                    curr.left = nwNode;
                    return this
                }
                curr = curr.left;
            }else{
                if(!curr.right){
                    curr.right = nwNode;
                    return this
                }
                curr = curr.right;
            }
        }
    }
    find(value){
        if(!this.root)return false;
        var curr = this.root;
        var found = false;
        if(curr && !found){
            if(value < curr.value){
                curr = curr.left;
            }else if(value > curr.value){
                curr = curr.right;
            }else{
                found = true;
            }
        }
        if(!found)return undefined;
        return curr;
    }
}

var s = new BinarySearchTree();
s.insert(10);
s.insert(8);
s.insert(15);
s.insert(13);
s.insert(20);
console.log(s)