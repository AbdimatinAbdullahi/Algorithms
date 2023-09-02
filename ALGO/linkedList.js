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
    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.prepend(node.val)
            this.size = 0
        }
        else{
            let curr = this.head;

            while(curr.next != null){
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++
    }

    insert(val, index){
        if(index < 0 || index > this.size){
            return
        }

        if(index == 0){
            this.prepend(val);
        }
        else
        {
            const node = new Node(val);
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }

         
    }

    remove(index){
        if(index < 0 || index >= this.size){
            return null;
        }

        let rmvNode 
        if(index == 0){   
            rmvNode = this.head;         
            this.head = this.head.next
        }

        if(index > 0){
            let prv = this.head;
            for(let i = 0; i < index -1; i++){
                prv = prv.next;
            }
            rmvNode = prv.next; //let prv.next points to the removed node.
            prv.next = rmvNode.next; //let prev.next points to where the rmvNode points to.
        }

        this.size--;
        return rmvNode.val;
        
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