const max = prompt('enter number ...');
console.log (max);
const random = Math.floor(math.random()*max)+1;
console.log(random);


let guess = prompt('enter the number to guess...');

while(true) {
    if(guess == 'quit'){
        console.log('user quits the game...');
        break;
    }
    if(guess == random){
        console.log('user are right!!!');
        break;
    }
    else{
        guess = prompt('ur guess was wrong, plz try again..');
    }
    
}

while(true) {
    if(guess == 'quit'){
        console.log('user quits the game...');
        break;
    }
    if(guess == random){
        console.log('user are right!!!');
        break;
    }
    else if(guess < random){
        guess= prompt('hint: your guess was too small, plz try again...');
    }
    else{
        guess = prompt('hint: your guesss was too large, plz try again...');
    }
}