
 /*  const score = {
    wins : 0,
    losses: 0,
    ties: 0
  } */


    const score = JSON.parse(localStorage.getItem('score')) ||{
      wins: 0,
      losses:0,
      ties :0
    };
    
   updateScoreElement();
  
  //5hr 
  /* if(!score) {
    score = {
      wins: 0,
      losses:0,
      ties :0
    };
  } */
  
    let isAutoPlaying = false;
    let intervalId;

//cost autPly =() =>{
  //};

  function autoPlay(){
if(!isAutoPlaying){
  intervalId =  setInterval(()=>{
    const playerMove = PickComputerMove();
    playgame(playerMove);
   
   
       },1000);
       isAutoPlaying = true;

}else {
  clearInterval(intervalId);
  isAutoPlaying = false;
}
 }
 //addevent 

 document.querySelector('.js-rock-button') .addEventListener('click',()=> {
  playgame('rock');
 })


 document.querySelector('.js-paper-button') .addEventListener('click',()=> {
  playgame('paper');
 })


 document.querySelector('.js-scissors-button') .addEventListener('click',()=> {
  playgame('scissors');
 })


// keydown

document.body.addEventListener('keydown', (event) => {
if(event.key === 'r') {
  playgame('rock');
}else if(event.key === 'p') {
  playgame('paper');
}else if (event.key === 's'){
  playgame('scissors');
}

});


   function playgame(playerMove) {
    const  randomNumber = Math.random();
  
  const computerMove =  PickComputerMove();
  let result = '';
  
  if(playerMove === 'scissors'){
  if (computerMove === 'rock') {
  result = 'You lose.';
  }else if ( computerMove === 'paper'){
  result = 'You win.';
  }else if ( computerMove === 'scissors'){
   result = 'Tie.';
   }
  
  }else if(playerMove === 'paper'){
    if (computerMove === 'rock') {
     result =  'You win.';
    }else if ( computerMove === 'paper'){
      result = 'Tie.';
    }else if ( computerMove === 'scissors'){
        result ='You lose.';
    }
    
  }else if(playerMove === 'rock'){
      if (computerMove === 'rock') {
        result = 'Tie.';
      }else if ( computerMove === 'paper'){
      result = 'You lose.';
      }else if ( computerMove === 'scissors'){
        result = 'You win.'
      }
  }
  
  if (result === 'You win.'){
    score.wins +=1;
  }else if (result === 'You lose.') {
    score.losses  +=1;
  }else if (result ==='Tie.'){
    score.ties +=1;
  }
  
  
  localStorage.setItem('score',JSON.stringify(score));
  
  updateScoreElement();
  
  document.querySelector('.js-result').innerHTML = result;
  
  document.querySelector('.js-move').innerHTML = ` You 
    <img src = "img/${playerMove}-emoji.png"class="move-icon">
    <img src="img/${computerMove}-emoji.png"class="move-icon">Computer`;
  
  
   }
  
   function updateScoreElement() {
   
    document.querySelector('.js-score')
    .innerHTML = `wins:${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`;
  
    
  }
  
   function PickComputerMove(){
    const  randomNumber = Math.random();
    let = computerMove ='';
  
        if (randomNumber >= 0 && randomNumber <1/3){
        computerMove ='rock';
        }else if (randomNumber >= 1/3 && randomNumber <2/3) {
           computerMove ='paper';
        }else if (randomNumber >= 2/3 && randomNumber <1){
           computerMove ='scissors';
        }
     return computerMove;

      }