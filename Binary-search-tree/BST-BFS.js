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
    search(root,val){
        if(!root){
            return false;
        }else{
            if(root.value === val){
                return true;
            }else if(val < root.value){
                return this.search(root.left,val);
            }else{
                return this.search(root.right,val);
            }
        }
    }
    
    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node)
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var s = new BinarySearchTree();
s.insert(10);
s.insert(8);
s.insert(15);
s.insert(13);
s.insert(20);
console.log(s)