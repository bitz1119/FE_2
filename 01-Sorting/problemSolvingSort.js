function kClosest (){
    let x = [0,1,2,1,0,3,4]
    let y = [0,1,4,3,2,1,0]
    let k = 3;

    let points = [];
    for (let index = 0; index < x.length; index++) {
        let tempArr = [x[index],y[index]];
        points.push(tempArr);
    }

    // points = [[0,0],[1,2],[2,4],[1,3]]

    function compare(point1,point2){
        // what is point1 -> [x,y]
        // what is point2 -> [x,y]

        let distance1 = Math.sqrt(point1[0]*point1[0] + point1[1]*point1[1]);
        let distance2 = Math.sqrt(point2[0]*point2[0] + point2[1]*point2[1]);

        return distance1 - distance2;
    }

    points.sort(compare);

    console.log(points);
    console.log(points.slice(0,k));
}


function swap(arr,index1,index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


function waveSorter(){
    let arr = [9,8,7,6,5,21,2,4];

    for (let index = 1; index < arr.length; index++) {
        // case even
        if(index % 2 == 0){
            if(arr[index-1] > arr[index]){
                swap(arr,index-1,index);
            }
        }
        else{
            // odd
            if(arr[index-1] < arr[index]){
                swap(arr,index-1,index);
            }
        }

    }

    console.log(arr);
}

waveSorter();
