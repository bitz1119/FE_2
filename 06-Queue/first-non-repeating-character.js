let s = "abacacb";
let map = {};


let k = 0;
for (let i = 0; i < s.length;i++){
    if(map[s[i]] == undefined){
        map[s[i]] = 1;
    }
    else{
        map[s[i]]++;
    }
    let nonrepeatingCharacter = -1;
    while ( k <= i){
        if(map[s[k]] == 1){
            nonrepeatingCharacter = s[k];
            break;
        }
        k++;
    }
    console.log(map)
    console.log(nonrepeatingCharacter);
}

