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

    
    reverse(){
        let prev = null;
        let curr = this.head;

        while(curr){ //While curr exits, since the curr will ultimately going to point to null at the end
            let next = curr.next; // temporary pointer is created and it value is assigned to curr.next
            curr.next = prev; //Curr.next is pointed to prev
            prev = curr; //prev is assigned to curr, for now both curr and prev points at same location
            curr = next; // curr pointer is advanced to point to next
        }

        this.head = prev; // At the end, both curr and next will point to null and this.head is assigned to prev
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }

        else
        {
           let i = 0;
           let curr = this.head;

           while(curr){
            if(curr.val === value){
                return i;
           
            }
            curr = curr.next;
            i++;
           }           
        }
        return -1
    }

    removeValue(target){
        if(this.isEmpty()){
            return null
        }

        if(this.head.val == target){ //Takes care of possible remove if value bieng wanted to be removed collides with the value in the this.head
            this.head = this.head.next; //this head is advenced to point to the pointer where this.head points to.
            this.size--;
            return target;
        }

        else{
            let prev  = this.head;

            while(prev.next && prev.next.val != target){
                prev= prev.next;
            }

            if(prev.next){ //If prev. next is true but prev.next.value equals the target
                let removeNode = prev.next; //Assign the remove node to point to remove node.
                prev.next = removeNode.next; // let know the prev.next points to remove node .next
                this.size--;
                return target
            }
        }
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
list.append(70)
list.removeValue(70)
list.insert(90,2)
console.log(list.search(10))
list.reverse()
list.print()