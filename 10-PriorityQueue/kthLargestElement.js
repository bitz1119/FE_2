/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


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
                currIndex = this.parent(currIndex)
            }
        }
    }

    isLeafNode(parent){
        if(parent*2+1 > this.pq.length - 1){
            return true;
        }
        return false;
    }


    findHighestAmongParentChild(currIndex){
        if(this.isLeafNode(currIndex)){
            return currIndex;
        }

        let parent = this.pq[currIndex];
        let leftChild = this.pq[this.leftChild(currIndex)];
        if(this.rightChild(currIndex) < this.pq.length - 1){
            let rightChild = this.pq[this.rightChild(currIndex)];
            let max = Math.max(parent,leftChild,rightChild);
            if(max === parent){
                return currIndex;
            }
            else if(max === leftChild){
                return this.leftChild(currIndex);
            }
            else {
                return this.rightChild(currIndex);
            }
        }
        else{
            let max = Math.max(parent,leftChild);
            console.log(max,parent,leftChild);
            if(max === parent){
                return currIndex;
            }
            else if(max === leftChild){
                return this.leftChild(currIndex);
            }

        }

    }

    removeElement(){
        // swap root->0th Index and Last Index
        let lastIndex = this.pq.length - 1;
        let temp = this.pq[lastIndex];
        this.pq[lastIndex] = this.pq[0];
        this.pq[0] = temp;
        
        // pop last element
        console.log(this.pq.pop());

        let currIndex = 0;
        while(!this.isLeafNode(currIndex) && this.findHighestAmongParentChild(currIndex) != currIndex ){        
            // replace highest with root
            let highest = this.findHighestAmongParentChild(currIndex);
            let temp = this.pq[highest];
            this.pq[highest] = this.pq[currIndex];
            this.pq[currIndex] = temp;
            currIndex = highest;
        }
    }


    display(){
        console.log(this.pq);
    }
}



var findKthLargest = function(nums, k) {
    let pq = new PriorityQueue();

    for (let i = 0;i < nums.length;i++){
        pq.addElement(nums[i]);
    }


    for (let i = 0;i < (k-1);i++){
        pq.removeElement();
    }

    return pq.pq[0];

};