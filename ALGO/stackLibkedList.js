const LinkedList = require("./Linked-List");

class StackLinkedList {
    constructor(){
        this.list = new LinkedList();
    }

    push(val){
       this.list.prepend(val);
    }
    pop(){
       return this.list.removeFromFront();
    }

    isEmpty(){
      return  this.list.isEmpty();
    }
    
    peek(){
        return this.list.head;
    }
    print(){
      return  this.list.print();
    }

}

const stack = new StackLinkedList()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.print()
stack.pop()
stack.print()