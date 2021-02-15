//Full Name
var arr=new Array();
// [obj1 ,obj2 ,obj3]

// obj1{ firstName: ,
// lastName}



var n=Number(prompt("Enter Total Num="));
for( var i=0; i < n ; i++)
{

var fullName=prompt("Enter Full Name");
console.log(`Full Name ${fullName}`);

//First Name
var fn=fullName.split(" ");
var firstName=fn[0];
var e= fn[0].length;


//last name
var lastName=fullName.slice(+e, );
console.log(`First Name=  ${firstName}`);
console.log(`Last Name= ${lastName}`);

var obj={};
obj.firstName=firstName.toUpperCase();
obj.lastName=lastName.toUpperCase();
arr.push(obj);

}

console.log(arr);

// //searching

var searchName=prompt("Enter Searching Char=", " ")
searchName=searchName.toUpperCase();

console.log(searchName)

for(let i=0; i < arr.length ; i++)
{
    if(arr[i].firstName.includes(searchName) || arr[i].lastName.includes(searchName))
    {
        console.log(arr[i]);
    }
}

