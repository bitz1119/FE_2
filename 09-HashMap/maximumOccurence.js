let str = "abcdabcacacacc";
let freqMap = new Map();

for (let i = 0; i < str.length;i++){
    if(freqMap.has(str[i])){
        freqMap.set(str[i],freqMap.get(str[i])+1);
    }
    else{
        freqMap.set(str[i],1);
    }
}

// find first maximum frequency character 
let maxOccuringCharacter = str[0];
for (let i = 1; i < str.length; i++){
    if(freqMap.get(str[i]) > freqMap.get(maxOccuringCharacter)){
        maxOccuringCharacter = str[i];
    }
}

console.log(maxOccuringCharacter)

