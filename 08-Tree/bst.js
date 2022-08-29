class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


let root = null;

function addNode(value){
    if(root === null){
        root = new Node(value);
    }
    else{
        let isValuePlaced = false;
        while(!isValuePlaced){
            let temp = root;
            if(temp.value < value){
                if(temp.left === null){
                    temp.left = new Node(value);
                    isValuePlaced = true;
                }
                else{
                    temp = temp.left;
                }
            }
            else{
                if(temp.right === null){
                    temp.right = new Node(value);
                    isValuePlaced = true;
                }
                else{
                    temp = temp.right;
                }
            }
        }
    }


}
