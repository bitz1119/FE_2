let phoneDir = {}

function addPhoneNo(number,name){
    phoneDir[number] = name;
}

function getPhoneNo(number){
    return phoneDir[number];
}

addPhoneNo("9999999","Aatish")
addPhoneNo("9999991","Nishant")
addPhoneNo("9999992","Jitendra")

console.log(getPhoneNo("9999992"));
console.log(getPhoneNo("9999991"));
console.log(getPhoneNo("9999999"));
console.log(getPhoneNo("9999990"));

