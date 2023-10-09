const score = {
    wins  : 0,
    loses : 0,
    ties  : 0,
};


function computerChoice(){
    let randomChoice = Math.random();
    let getChoice = '';
    if(randomChoice >= 0 && randomChoice < 1/3){
        getChoice = 'rock';
    }else if (randomChoice >= 1/3 && randomChoice < 2/3){
        getChoice = 'papper';
    }else{
        getChoice = 'scissor';
    }
    
    return getChoice;
}

function compareChoice(userClicked){
    const computerClicked = computerChoice();
    let finalResult = '';
    let hello = '';
    if(userClicked === 'rock'){
        if(computerClicked === 'rock'){
            finalResult = 'game tie';
            
        }else if(computerClicked === 'papper'){
            finalResult = 'you lose';
            
        }else if(computerClicked === 'scissor'){
            finalResult = 'you win';
            
        }
        userClicked = document.querySelector('.rockButton').innerHTML;
    }

    else if(userClicked === 'papper'){
        if(computerClicked === 'rock'){
            finalResult = 'you win';
            
        }else if(computerClicked === 'papper'){
            finalResult = 'game is tie';
            
        }else if(computerClicked === 'scissor'){
            finalResult = 'you lose';
            
        }
        userClicked = document.querySelector('.papperButton').innerHTML;
    }

    else if(userClicked === 'scissor'){
        if(computerClicked === 'rock'){
            finalResult = 'you lose';
            
        }else if(computerClicked === 'papper'){
            finalResult = 'you win';
            
        }else if(computerClicked === 'scissor'){
            finalResult = 'game is tie';
            
        }
        userClicked = document.querySelector('.scissorButton').innerHTML;
    }

    if(finalResult === 'you win'){
        score.wins += 1;
    }else if(finalResult === 'you lose'){
        score.loses += 1;
    }else if(finalResult === 'game is tie'){
        score.ties += 1;
    }

    if(computerClicked === 'rock'){
        hello = document.querySelector('.rockButton').innerHTML;
    }else if(computerClicked === 'papper'){
        hello = document.querySelector('.papperButton').innerHTML;
    }else if(computerClicked === 'scissor'){
        hello = document.querySelector('.scissorButton').innerHTML;
    }

  

    document.querySelector('.display1').innerHTML = `you choose ${userClicked} computer choose ${hello}`;
    document.querySelector('.display2').innerHTML = `${finalResult}`; 
    document.querySelector('.display3').innerHTML = `wins : ${score.wins} , loses : ${score.loses} , ties : ${score.ties}`;
}

let isautoplay =  false;
let intervalid;

function autoplay(){

    if(!isautoplay){
        intervalid = setInterval(function(){
            let userClicked = computerChoice();
            compareChoice(userClicked);
        },1000) 
        
        isautoplay = true;
    }else{
        clearInterval(intervalid);
        isautoplay = false;
    }
   
}

