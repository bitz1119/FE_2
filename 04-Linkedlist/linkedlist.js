class Node {
    constructor(data) {
        this.data = data;
        this.nextAddress = null;
    }
}

let node = new Node(10);
console.log(node)


class Linkedlist {
    constructor() {
        this.root = null;
    }
    // how to add element in linkedlist
    add(data){
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

}

let linkedlist = new Linkedlist();
linkedlist.add(10);
linkedlist.add(20);
linkedlist.add(30);
linkedlist.add(40);
