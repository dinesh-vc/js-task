//No of input

let n= Number(prompt("Enter total Number="), "");

let arr= new Array();

for(let i=0 ; i < n ; i++)
{
  
var fullName=prompt("Enter Full Name");
let age=prompt("Enter age", " ");

console.log(`Full Name ${fullName}`);

//First Name
var fn=fullName.split(" ");
var firstName=fn[0];
var e= fn[0].length;


//last name
var lastName=fullName.slice(+e, );
let obj={ name : {firstName :firstName.toUpperCase(), lastName:lastName.toUpperCase()}, age:age};
    arr.push(obj);
}

console.log(arr)

// sorting function
arr.sort(function (obj1 , obj2){  
    if(obj1.name.firstName > obj2.name.firstName){
        return 1;              
    }
    else if(obj1.name.firstName < obj2.name.firstName){
        return -1;
    }
    else{
        return 0;
    }
});


//searching data
let seachedArray=[];
let searchName=prompt("Enter Character For Searching=", "");
for(let i=0; i < n; i++)
{
    if(arr[i].name.lastName.includes(searchName.toUpperCase()))
    {
      searchedArray=arr[i];
    }
}


console.log(`Searched Name:`);
console.log(searchedArray)