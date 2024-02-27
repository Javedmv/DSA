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

    //preOrder
    
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        traverse(this.root);
        return data;
    };

    //postOrder
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
            data.push(node)
        }
        traverse(this.root);
        return data;
    }

    //inOrder
    DFSInOrder(){
        var data = [];
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}