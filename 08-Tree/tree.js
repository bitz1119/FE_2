class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = null;
//value number
// path array
function addNode(value, path){
    if(root == null){
        root = new Node(value);
        return;
    }
    let temp = root;
    for(let i = 0; i < path.length-1; i++){
        if(path[i] === "l"){
            temp = temp.left;
        }
        else if(path[i] === "r"){
            temp = temp.right;
        }
    }
    if(path[path.length-1] == "l"){
        temp.left = new Node(value);
    }
    else{
        temp.right = new Node(value);
    }
}

addNode(1,[]);
addNode(2,["l"])
addNode(3,["r"])
addNode(4,["l","l"])
addNode(5,["l","r"])
addNode(7,["r","l"])
addNode(8,["r","r"])

// console.log(root)


function preorder(parent){
    if(parent === null){
        return;
    }
    console.log(parent.val);
    preorder(parent.left);
    preorder(parent.right);
}


function inorder(parent){
    if(parent === null){
        return;
    }
    inorder(parent.left);
    console.log(parent.val);
    inorder(parent.right);

}


function postorder(parent){
    if(parent === null){
        return;
    }
    postorder(parent.left);
    postorder(parent.right);
    console.log(parent.val);
}

postorder(root);