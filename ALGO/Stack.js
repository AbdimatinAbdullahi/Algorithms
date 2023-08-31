class Stack {
    constructor(){
        this.items = [];
    }

    push(val){
        this.items.push(val);
    }
    pop(){
        return  this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length;
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.size())
console.log(stack.peek());
stack.pop()
console.log(stack.peek());
console.log(stack.isEmpty());