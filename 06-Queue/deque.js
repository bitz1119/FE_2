class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addFront(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    removeFront(){
        if(this.head === null){
            console.log("empty linkedlist");
            return;
        }
        
        let data = this.head.data;
        this.head = this.head.next;

        if(this.head === null){
            this.tail = null;
        }
        else{
            this.head.prev = null;
        }
        return data;
    }

    addToEnd(data){
        let newNode = new Node(data);
        if(this.tail === null){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    // removeLast HW
    // move to prev and make tail.next = null
    // if there is only 1 node

}


let dLL = new DoublyLinkedlist();
dLL.addToEnd(10)
dLL.addToEnd(20)
dLL.addToEnd(30)
dLL.addFront(9)
dLL.addFront(8)
dLL.addFront(7)
// 7 8 9 10 20 30

console.log(dLL.removeFront())
console.log(dLL.removeFront())
console.log(dLL.removeFront())
console.log(dLL.removeFront())
console.log(dLL.removeFront())
console.log(dLL.removeFront())
console.log(dLL.removeFront())
// 7 8 9 10