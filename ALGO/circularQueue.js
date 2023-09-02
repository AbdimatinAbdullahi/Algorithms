class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.Length = 0;
        this.front = -1;
        this.rear = -1
    }

    isFull(){
        return this.capacity === this.Length
    }

    isEmpty(){
        return this.Length === 0
    }

    enqueue(val){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity;
            this.items[this.rear] = val;
            this.Length += 1;

            if(this.front == -1){
                this.front = this.rear;
            }
        }
        return null;
    }

    dequeue(){
        if(this.isEmpty()){
            return null;
        }

        const removeItem = this.items[this.front];
        this.items[this.front] = null;
        this.front= (this.front + 1) % this.capacity;
        this.Length -= 1;
        if(this.isEmpty()){
            this.front = -1;
            this.front = -1;
        }
    }

    size(){
        return this.Length;
    }

    print(){
        if(this.isEmpty()){
            console.log(`Nothing To Print`)
        }
        
        else{
            let i;
            let str = "";

            for(let i = this.front; i !== this.rear  ; i = (i + 1) % this.capacity){
                str += this.items[i] + " ";
            }
        str += this.items[i]
        console.log(str); 
        }
        
        

    }

}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.size())
queue.enqueue(10)
queue.enqueue(20);
queue.enqueue(30)
queue.enqueue(40);
queue.enqueue(50);
queue.dequeue()
console.log(queue.size())
queue.print()