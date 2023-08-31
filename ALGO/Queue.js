class Queue {
    constructor(){
        this.item = [];
    }

    enqueue(val){
        this.item.push(val);
    }

    dequeue(){
        return this.item.shift();
    }

    size(){
        return this.item.length;
    }

    peek(){
        return this.item[this.item.length - 1];
    }

    print(){
        console.log(this.item.toString());
    }

    isEmpty(){
        return this.item.length === 0
    }
}

// const queue = new Queue();
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.peek());
// console.log(queue.size());
// queue.dequeue();
// console.log(queue.size());


//Due to shift method in dequeue Method in Queue, the time complexity of dequeueing the element from it will be big-O of (n), so there will be need to optimised ita


class Que {
    constructor(){
        this.items = {}; //Set the element as object
        this.rear = 0; //Set the rear as zero  
        this.front = 0; //set the front as zero as well
    }

    enqueue(val){
        this.items[this.rear] = val; //set the items[this.rear] as the new val
        this.rear++; //increase the pointer of rear when an element is added
    }

    dequeue(){
        const item = this.items[this.front]; //set the element at the from of object as item
        delete items[this.front]; //delete that item
        front++; //increase the pointer form 0 to one 
        return item; //return the deleted item
    }

    print(){
        console.log(this.items);
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        return this.items[this.front];
    }

    size(){
        return this.rear - this.front;
    }
}

const que1= new Que();
que1.isEmpty()
que1.enqueue(10)
que1.enqueue(20)
que1.enqueue(30)
que1.enqueue(40)
console.log(que1.peek())
que1.print();