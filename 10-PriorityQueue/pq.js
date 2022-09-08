class PriorityQueue{

    constructor(){
        this.pq = [];
    }

    parent(currIndex){
        return Math.floor((currIndex-1)/2);
    }

    leftChild(currIndex){
        return 2*currIndex + 1;
    }

    rightChild(currIndex){
        return 2*currIndex + 2;
    }

    addElement(ele){
        this.pq.push(ele);
        if(this.pq.length == 1){
            return;
        }
        else{
            let currIndex = this.pq.length - 1;
            while(currIndex != 0 && this.pq[this.parent(currIndex)]<this.pq[currIndex]){
                // swap values
                let temp = this.pq[currIndex];
                this.pq[currIndex] = this.pq[this.parent(currIndex)];
                this.pq[this.parent(currIndex)] = temp;
            }
        }
    }


    display(){
        console.log(pq);
    }
}

let pq = new PriorityQueue();
pq.addElement(5);
pq.addElement(10);
pq.addElement(12);
pq.addElement(3);
pq.addElement(4);

pq.display();
