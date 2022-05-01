class Node {
    constructor(data) {
        this.data = data;
        this.nextAddress = null;
    }
}


class Linkedlist {
    constructor() {
        this.root = null;
    }
    // how to add element in linkedlist
    addToLast(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        // move temp to last untill nextaddress is null
        else {
            let temp = this.root
            while(temp.nextAddress != null){
                temp = temp.nextAddress;
            }
            temp.nextAddress = newNode;
        }
    }

    display(){
        let temp = this.root;
        while(temp != null){
            console.log(temp.data + " --> ")
            temp = temp.nextAddress;
        }
    }

    addToFront(data){
        let newNode = new Node(data);
        newNode.nextAddress = this.root;
        this.root = newNode;
    }

    removelast(){
        let temp = this.root;
        if(this.root == null){
            return;
        }
        else if(this.root.nextAddress == null){
            this.root = null;
            return;
        }

        while(temp.nextAddress.nextAddress != null){
            temp = temp.nextAddress;
        }
        // temp is second last element 
        temp.nextAddress= null;

    }

    getIthElement(i){
        let temp = this.root;
        for (let index = 0; index < i; index++) {
            temp = temp.nextAddress;
        }
        console.log(temp.data);
    }

    addToIthIndex(i,data){

        if(i === 0){
            this.addToFront(data);
            return;
        }

        let newNode = new Node(data);
        let temp = this.root;
        for(let index = 0; index < i-1; index++){
            temp = temp.nextAddress;
        }
        newNode.nextAddress = temp.nextAddress;
        temp.nextAddress = newNode;

    }

    reverse(){
        // prev,curr,next
        let prev = null;
        let curr = this.root;
        let next = curr.nextAddress;

        while(next != null){
            curr.nextAddress = prev;
            // change prev,curr,next
            prev = curr;
            curr = next;
            next  = next.nextAddress;
        }
        curr.nextAddress = prev;
        this.root = curr;
    }

}

let linkedlist = new Linkedlist();
linkedlist.addToLast(10);
linkedlist.addToLast(20);
linkedlist.addToLast(30);
linkedlist.addToLast(40);
linkedlist.addToLast(50);
linkedlist.addToLast(60);
// linkedlist.display();
// linkedlist.getIthElement(2);  // ans = 30
// linkedlist.addToIthIndex(3,35);
linkedlist.display();
linkedlist.reverse();
linkedlist.display();
