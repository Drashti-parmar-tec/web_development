//1
let greeting = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log('this is outer function $(greet)');
    function innerGreet(){
        console.log('this is inner function $(greet)');
        scope
    }
    innerGreet();

}
console.log('this is global scope variable $(greet)');
changeGreet();


//2

function multipleGreet(func, count){
    for (let i = 0 ; i < count; i++){
        func();
    }
}

let greet = function() {
    console.log("hello!!");
}

multipleGreet(greet,4);

//3 

function oddEvenTest(requst){
    if(request == "odd") {
        return function(n){
            //console.log(n%2 != 0);
            console.log(n%2 == 0);
        }
    }else{
        console.log("wrong request...")
    }
}

//4
function oddEvenTest(requst){
    if(request == "odd") {
        return function(n){
            //console.log(n%2 != 0);
            console.log(n%2 == 0);
        }
        return odd;
    }else if(request == "event"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }else{
        console.log("wrong request...");
    }
}
oddEvenTest(a);