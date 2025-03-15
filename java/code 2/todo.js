let req = prompt ("please enter your requast.");

//console.log(req);

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
}

if (req == "list"){
    console.log("----------");
    for(tast of todo){
        console.log("-------------");
    }
    
}
else if(req == "add"){
    let task = prompt("plase enter the task you want to add..");
    todo.push(task);
    console.log("task added")
}
else if(req == "delet"){
    let task = prompt("plase enter the task index..");
    todo.splice(idx,1);
    console.log("task deleted");
}
else{
    console.log("wrong request....");  
}
req = prmpt("pleaseenter your request");
