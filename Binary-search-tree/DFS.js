class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        var nwNode = new Node(val);
        if(!this.root){
            this.root = nwNode;
        }
        var curr = this.root;
        while(true){
            if(val == curr.value)return false;
            if(val > curr.value){
                if(!curr.left){
                    curr.left = nwNode;
                    return this;
                }
                curr = curr.left;
            }else{
                if(!curr.right){
                    curr.right = nwNode;
                    return this;
                }
                curr = curr.right;
            }
        }
    }
    find(val){
        if(!this.root)return undefined;
        var curr = this.root;
        var found = false;
        while(curr && !found){
            if(val < curr.value){
                curr = curr.left;
            }else if(val > curr.value){
                curr = curr.right;
            }else{
                found = true;
            }
        }
        if(!found)return false;
        return curr;
    }

    //preOrder
    
    DFSPreOrder(){
        var data = [];
        function treverse(node){
            data.push(node);
            if(node.left)treverse(node.left);
            if(node.right)treverse(node.right);
        }
        treverse(this.root);
        return data;
    };
}