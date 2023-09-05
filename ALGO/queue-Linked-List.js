const LinkedList = require("./Linked-List");

class QueueLinkedList {
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(val){
        this.list.append(val)
    }

    dequeue(){
       return this.list.removeFromFront()
    }

    print(){
        return this.list.print()
    }
}

const queue = new QueueLinkedList();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.print()