//1
let age = 25;
if(age>= 18){
    let str = "Adult";
}
console.log(str);

//2
function outerFun(){
    let x = 5;
    let y = 10;
    function innerFun(){
        console.log(x);
    }
    innerFun()
}

//3
function outerFun(){
    let x = 5;
    let y = 10;
    function innerFun(){
        let a= 10;
        console.log(x);
        console.log(y);
    }
    innerFun(a);
    innerFun();
}