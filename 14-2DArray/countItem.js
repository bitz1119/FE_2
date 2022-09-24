let items = [
            ["phone","blue","pixel"],
            ["computer","silver","lenovo"],
            ["phone","gol d","iphone"]
        ];

let ruleKey = "type";
let ruleValue = "phone";

console.log(findItems(items, ruleKey, ruleValue));

// "type", "color", or "name".

function findItems(items,ruleKey,ruleValue) {
    // ruleKey is type -> 0th column
    // ruleKey is color -> 1st column
    // ruleKey is name -> 2st column
    let columns = -1;
    if(ruleKey == "type"){
        columns = 0;
    }
    else if(ruleKey == "color"){
        columns = 1;
    }
    else if(ruleKey == "name"){
        columns = 2;
    }

    let counter = 0;
    for(let i = 0; i < items.length; i++){
        if(items[i][columns] == ruleValue){
            counter++;
        }
    }

   return counter;
}

