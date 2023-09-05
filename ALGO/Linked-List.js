class Node{
    constructor(value){
        this.value  = value;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    getSize(){
        return this.size 
    }
    
    isEmpty(){
        return this.size == 0;
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(val){
        const node = new Node(val);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }

        else{
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }        
            const val = this.head.value;
            this.head = this.head.next;
            this.size--;
            return val;
      
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const val = this.tail.value;
        if(this.size == 1){
            this.head = null;
            this.tail = null;
        }

        else{
            let prev = this.head;
            while(prev.next != this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev            
        }

        this.size--;
    }

    print(){
        if(this.isEmpty()){
            console.log(`Nothing to print`)
        }

        let str = "";
        let currentNode = this.head;

        while(currentNode){
            str += currentNode.value + " ";
            currentNode = currentNode.next;
        }
        console.log(str)
    }
}

module.exports = LinkedList;