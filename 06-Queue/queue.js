class Queue{

    constructor(){
        this.queue = [];
    }

    enqueue(value){
        this.queue.push(value);
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty")
            return "Queue is empty";
        }
        // if queue is empty`
        return this.queue.shift();
    }

    front(){
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length===0;
    }

    display(){
        for (let i=0; i<this.queue.length; i++){
            console.log(this.queue[i]);
        }
    }

}


let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);

q.display(); // 10 20 30 40


q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();


q.display(); // 40