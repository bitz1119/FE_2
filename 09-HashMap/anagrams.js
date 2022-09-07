
function sortString(str){
    return str.split("").sort().join('');
}



let strs = ["eat","tea","tan","ate","nat","bat"];

let anagramMap = new Map();

for (let i = 0; i < strs.length; i++) {
    if(anagramMap.has(sortString(strs[i]))) {
        anagramMap.get(sortString(strs[i])).push(strs[i]);
    }
    else{
        anagramMap.set(sortString(strs[i]), [strs[i]])
    }
}

console.log(anagramMap.values())

