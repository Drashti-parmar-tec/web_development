let color = "red";
switch(color){
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("go");
            break;    
    default :
        console.log("broken light")
}
console.log("this is after switchcase.... ");


let day =1;
switch (day) {
    case 1 : 
    console.log("monday");
    break;
    case  2: 
    console.log("tuesday");
    break;
    case 3 : 
    console.log("wednesday");
    break;
    case 4 : 
    console.log("thursday");
    break;
    case 5 : 
    console.log("friday");
    break;
    case 6 : 
    console.log("saturday");
    break;
    case 7 : 
    console.log("sunday");
    break;
    defalt :
    console.log("wrong day");

}

console.log("this is simp. log...")
console.error("this is error")
console.warn("this is warning")
alert("this is alert");

let firstName = prompt("enter your name...");
let lasttName = prompt("enter your last name...");
console.log("welcome",firstName,lastName);