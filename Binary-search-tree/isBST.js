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
    
    isBST(root,min,max){
        if(!root){
            return true;
        }
        return (root.data > min && root.data < max && this.isBST(root.left,min,root.data) && this.isBST(root.right,root.data,max)); 
    }
}
