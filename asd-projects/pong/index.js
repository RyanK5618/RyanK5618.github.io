/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  //const FRAME_RATE = 60;
  //const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 
   
  // Game Item Objects
  

  // one-time setup
     // execute newFrame every 0.0166 seconds (60 Frames per second)
  //$(document).on('keydown', addEventListener);
                          
 
startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  

  // variables for the whole thing.
   var speedOfPaddle1 = 0;
   var speedOfPaddle2 = 0;
   var paddleHeight = 120;
   var paddleWidth = 30;
   var ballRadius = 25;
   var halfPaddleHeight = paddleHeight/2;
   var positionOfPaddle1 = 200;
   var positionOfPaddle2 = 200;
   var topPositionOfBall = 510;
   var leftPositionOfBall = 820;
   var topSpeedOfBall = 10;
   var leftSpeedOfBall = 5;
   var userScore = 0;
   var compScore = 0;
    

   function startBall() {
    topPositionOfBall = 510;
    leftPositionOfBall = 820;

    
    leftSpeedOfBall = (Math.random() * 6 + 5) * (Math.random() > 0.5 ? -1 : 1);
    topSpeedOfBall = (Math.random() * 6 + 5) * (Math.random() > 0.5 ? -1 : 1);
    }
// moving the paddles
  document.addEventListener('keydown', function(e) {
       //W key//
      if (e.keycode == 87 || e.which == 87) {
        speedOfPaddle1 = -10;
      }
       //S key//
       if (e.keycode == 83 || e.which == 83) {
        speedOfPaddle1 = 10;
      }
       //UP//
      if(e.keycode == 38 || e.which == 38){
        speedOfPaddle2 = -10;
      }
       //DOWN//
      if(e.keycode == 40 || e.which == 40){
        speedOfPaddle2 = 10;
      }
    })
       // does the same as before but gives more control.
    document.addEventListener('keyup', function(e) {

      if (e.keycode == 87 || e.which == 87) {
        speedOfPaddle1 = 0;
      }
       if (e.keycode == 83 || e.which == 83) {
        speedOfPaddle1 = 0;
      }
      if(e.keycode == 38 || e.which == 38){
        speedOfPaddle2 = 0;
      }
      if(e.keycode == 40 || e.which == 40){
        speedOfPaddle2 = 0;
      }
    })

      window.setInterval(function show(){
      positionOfPaddle1 += speedOfPaddle1;
      positionOfPaddle2 += speedOfPaddle2;
      
      topPositionOfBall += topSpeedOfBall;
      leftPositionOfBall += leftSpeedOfBall;
      // stop paddle's from leaving top of board
      if(positionOfPaddle1 <= 1){
        positionOfPaddle1 = 1;
      }

      if(positionOfPaddle2 <= 1){
        positionOfPaddle2 = 1;
      }
      // stop paddle's from leaving bottom of board
      if(positionOfPaddle1 >= window.innerHeight - paddleHeight){
        positionOfPaddle1 = window.innerHeight - paddleHeight
      }
      if(positionOfPaddle2 >= window.innerHeight - paddleHeight){
        positionOfPaddle2 = window.innerHeight - paddleHeight
      }
      
      if(topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius){
        topSpeedOfBall = -topSpeedOfBall
      }
       
      if (leftPositionOfBall <= paddleWidth){
        if(topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight){
          leftSpeedOfBall = -leftSpeedOfBall;
        } else {
          userScore += 1;
          endGame();
          startBall();
        }
      }
        if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth){
          if(topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
            leftSpeedOfBall = -leftSpeedOfBall;
          } else {
           compScore += 1;
            endGame();
            startBall();
          }
      }

      
      document.getElementById('user-paddle').style.top = positionOfPaddle1 + 'px';
      document.getElementById('comp-paddle').style.top = positionOfPaddle2 + 'px';
     
      document.getElementById('ball').style.top = topPositionOfBall + 'px';
      document.getElementById('ball').style.left = leftPositionOfBall + 'px';

      document.getElementById('user-score').innerHTML = userScore;
      document.getElementById('comp-score').innerHTML = compScore;
    }, 1000/60)
  
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    if (userScore == 10) {
      $(document).off();
      alert("Ha ha you are stuck now.");
    } else if (compScore == 10) {
      $(document).off();
      alert("Ha ha you are stuck now.");
    }

  }
  
   }
  