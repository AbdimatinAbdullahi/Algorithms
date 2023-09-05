class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node  = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log(`Nothing to print`)
        }

        const rmvNode = this.head;
        this.head = this.head.next
        this.size--;
        return rmvNode;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            console.log(`Nothing to remove`)
        }
        if(this.size == 1){
            this.tail = null;
            this.head = null;
        }

        const rmvNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size--;
        return rmvNode;
    }

    printReverse(){
        if(this.isEmpty()){
            console.log(`Nothing to reverse`);
        }

        else{
            let cur = this.tail;
            let str = ""
            while(cur.prev){
                str += cur.value + " ";
                cur = cur.prev;
            }
            console.log(str)
        }
    }
    print(){
        if(this.isEmpty()){
            console.log(`Nothing to print`);
        }

        else{
            let cur = this.head;
            let str = "";
            while(cur){
                str += cur.value + " ";
                cur = cur.next;
            }
            console.log(str)
        }
    }
}

const list = new LinkedList();
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(50)
list.removeFromFront()
list.removeFromEnd()
console.log(list.size)
list.printReverse()
list.print()
