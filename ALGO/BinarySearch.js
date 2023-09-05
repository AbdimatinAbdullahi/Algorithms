class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;        
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node;
        }
        else{
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode;
            }
            else{
                this.insertNode(root.left, newNode);
            }
        }
        else{
            if(root.right == null){
                root.right = newNode;
            }
            else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false;
        }
        else {
            if(root.value == value){
                return true;
            }
            else if(root.value < value){
                return this.search(root.right, value)
            }
            else{
                return this.search(root.left, value)
            }
        }
    }

    preOder(root){
        if(root){
            console.log(root.value);
            this.preOder(root.left);
            this.preOder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value)
        }
    }

    // levelOrder(){
    //     const queue = [];
    //     while(queue.length){
    //         if(qu)
    //     }
    // }

    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3);
bst.insert(7);
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))