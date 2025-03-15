//1

const calculator={
    num: 55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }
}

//2
const student = {
    name: "abc",
    age: 19,
    python: 4,
    java : 80,
    js: 35,
    getAvg() {
        let avg = (this.python+this.java+this.js)/3;
        console.log('$(name) got avg marks = ${avg}');
    }
}

function getAVg(){
    console.log(this)
}