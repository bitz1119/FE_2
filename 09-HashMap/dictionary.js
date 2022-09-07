let dictionary = {};

function addWord(word, meaning){
    dictionary[word] = meaning;
}

function getWord(word){

    return dictionary[word];
}

addWord("cat","billi");
addWord("dog","kutta");



console.log(getWord("cat"));
console.log(getWord("dog"));


console.log(getWord("horse"));