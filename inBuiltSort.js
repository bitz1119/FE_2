let arr = [1,3,2,4,0,10,20,100];

// ascending order
function compare(a,b){
    // when a should come before b
    if(a < b){
        return -1;
    }
    // when should b come before a
    else if(b < a){
        return 1;
    }
    else{
        return 0;
    }
}

// function desending order
function compareDecreasing(a,b){
    // when i want a before b
    if(a>b){
        // a=4 b=3
        return -1;
    }
    // when b should come before a
    else if(b > a){
        // a=3 b=4
        return 1;
    }
    else{
        return 0;
    }
}

arr.sort((a,b)=> b-a);

console.log(arr)


