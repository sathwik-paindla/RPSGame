  //object
  let score=JSON.parse(localStorage.getItem('score'))  || {
    games : 0,
    wins : 0,
    losses : 0,
    ties : 0 
};

updatescore();


/* document.querySelector('.js-score').innerHTML=`Games:${score.games},Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
*/


let isAutoplay=false;
let intervalID;
//for autoplaying
function autoplay()
{
    if(!isAutoplay)
    {
        intervalID=setInterval(function(){
    const playerMove=computerMove();
    //compMove=computerMove();
    playGame(playerMove);
        },1000);
        isAutoplay=true;

    }
    else{
    isAutoplay=false;
    clearInterval(intervalID);
    }
}


let compMove='';//global variable
function computerMove()
{
const randNum=Math.random();
        if(randNum>=0 &&  randNum<1/3)
        compMove='Rock';
        else if(randNum>=1/3 &&  randNum<2/3)
        compMove='Paper';
        else if(randNum>=2/3 &&  randNum<1)
        compMove='Scissors';
        return compMove;
}
let playerMove='';
let result='';
function playGame(playerMove)
{
    compMove=computerMove();
if(playerMove==='Scissors')
{    if(compMove===playerMove)
        {
            result='Tie';
            score.ties+=1;
        }
        else if(compMove==='Rock')
        {
            result='You LOSE';
            score.losses+=1;
        }
        else if(compMove==='Paper')
       { 
            result='You WIN';
            score.wins+=1;
       }
       score.games+=1;
       if(!isAutoplay)
        alert(`You picked ${playerMove}.Computer picked ${compMove}.${result}.
Games:${score.games},Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
}
else if(playerMove==='Rock')
{    if(compMove===playerMove)
        {
            result='Tie';
            score.ties+=1;
        }
        else if(compMove==='Paper')
       {
            result='You LOSE';
            score.losses+=1;
       }
        else if(compMove==='Scissors')
        {
            result='You WIN';
            score.wins+=1;
        }
        score.games+=1;
        if(!isAutoplay)
        alert(`You picked ${playerMove}.Computer picked ${compMove}.${result}.
Games:${score.games},Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
}
else if(playerMove==='Paper')
{    if(compMove===playerMove)
    {
        result='Tie';
        score.ties+=1;
    }
        else if(compMove==='Scissors')
    {
        result='You LOSE';
        score.losses+=1;
    }
        else if(compMove==='Rock')
    {
        result='You WIN';
        score.wins+=1;
    }
        score.games+=1;
        if(!isAutoplay)
        alert(`You picked ${playerMove}.Computer picked ${compMove}.${result}.
Games:${score.games},Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
}

updatescore();

document.querySelector('.js-move').innerHTML=`You picked <img src="images/${playerMove}-emoji.png" class="move-icon">& Computer picked <img src="images/${compMove}-emoji.png" class="move-icon">`;

document.querySelector('.js-result').innerHTML=`${result}.`;

localStorage.setItem('score',JSON.stringify(score));



//ADDING OBJECTS TO COUNT NO GAMES AND WINS
}
function updatescore()
{
    document.querySelector('.js-score').innerHTML=`Games:${score.games},Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
