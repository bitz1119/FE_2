``
class Stack{
    constructor(){
        this.arr = [];
    }

    push(value){
        this.arr.push(value);
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty");
        }
        else 
            return this.arr.pop();
    }

    isEmpty(){
        return this.arr.length == 0;
    }

    top(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty");
        }
        return this.arr[this.arr.length - 1];
    }

    addAtBottom(element){
        let tempStack = new Stack();
        while(!s.isEmpty()){
            tempStack.push(s.pop());
        }
        s.push(element);
        while(!tempStack.isEmpty()){
            s.push(tempStack.pop());
        }
    }

    display(){
        for(let i=0; i<this.arr.length;i++){
            console.log(this.arr[i])
        }
    }
}

function reverseStack(stack){
    if(!stack.isEmpty()){
        let element = stack.pop()
        reverseStack(stack);
        stack.addAtBottom(element);
    }
}


let s = new Stack();

s.push(10)
s.push(10)
s.push(30)
s.push(40)
s.push(50)

s.display()

reverseStack(s);
s.display()






