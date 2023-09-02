class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size;
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log(`Nothing to Print`)
        }

        else{
            let currNode = this.head;
            let str = ""
            while(currNode){
                str += currNode.val + " "
                currNode = currNode.next
        }

        console.log(str)
        }
    }

   }




const list = new LinkedList();
list.prepend(0)
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()