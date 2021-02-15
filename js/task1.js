//No of input

let n= Number(prompt("Enter total Number="), "");

let arr= new Array();

for(let i=0 ; i < n ; i++)
{
    let name = prompt("Enter name" , "");
    let age=prompt("Enter age", " ");

    let obj={};

    obj.name=name.toUpperCase();
    obj.age=+age;
    arr.push(obj);
}

//data
console.log("Our Data is Given Below")
for( let i=0 ; i < n ; i++)
{
    console.log(`Name : ${arr[i].name}  age : ${arr[i].age}`);
}

//searching data
let seachedArray=[];
let searchName=prompt("Enter Character For Searching=", "");
for(let i=0; i < n; i++)
{
    if(arr[i].name.includes(searchName.toUpperCase()))
    {
      searchedArray=arr[i];
    }
}


// sorting function

arr.sort(function (obj1 , obj2){  
    if(obj1.name > obj2.name){
        return 1;              
    }
    else if(obj1.name < obj2.name){
        return -1;
    }
    else{
        return 0;
    }
});

console.log(arr)
console.log(searchedArray);