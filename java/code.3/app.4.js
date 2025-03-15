//1 function as anme

function printName(){
    console.log('abc');
    console.log('full stack web development');
}
printName();

//2
function print1to5(){
    for(let i = 0; i<5;i++){
        console.log(1);
    }
}
print1to5();

//3 cheaking from user
function isAdult(){
    let age = prmpt('enter your age....');
    if(age<=18){
        console.log('allowed to vote amd drive');    
    }
    else{
        console.log('not alllowed to vote or drive....')
    }
}
isAdult();

//3 print name
function printName(name){
    console.log(name)
}

printName('xyz');

function printInfo(name,age){
    console.log('${name} age is ${age}');

}

printInfo('xyz',75);

//4 : addition funcation

function sum(a,b){
    console.log(a+b);
}

sum(2,5);
sum(20,5);
let result = sum(sum(10,20),40);
console.log(result);

//4.1: 

function sum(a,b){
    return a+b;
}

console.log(sum(su,(40,5),40));
console.log(sum(sum(sum(20,5),40),50));

//4.2: calling the function

function sum(a,b){
    let result = a+b;
    console.log('this result is from function scope $(result)');
}

//5 finding the average of 3 number

function calcAvg(a,b,c){
    let avg = (a+b+c)/3;
    console.log('the average of 3 number is ${avg}');
}

calcAvg(4,6,8)


//6 print table

function printTable(n){
    for(let i=n;i<n*10;i+=n){
        console.log(i);
    }    
}
printTable(10)


//7
const msg = ["full","stack","web","development","course"];

function concat(msg){
    let finalStr="";

    for (let i = 0;i<msg.length;i++ ){

        finalStr += msg[i];
    }
    return finalStr;
}


//7.1
const a = ["full","stack","web","development","course"];
function concat(msg){
    let finalStr="";

    for (let i = 0;i<msg.length;i++ ){

        finalStr += msg[i];
    }
    return finalStr;
}