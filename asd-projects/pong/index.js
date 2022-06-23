/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
 
   
  // Game Item Objects
  

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  //$(document).on('keydown', addEventListener);
                          
  
startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  

  // variables for the whole thing.
   var speedOfPaddle1 = 0;
   var speedOfPaddle2 = 0;
   var paddleHeight = 265;
   var paddleWidth = 30;
   var ballRadius = 25;
   var halfPaddleHeight = paddleHeight/2;
   var positionOfPaddle1 = 200;
   var positionOfPaddle2 = 200;
   var topPositionOfBall = 150;
   var leftPositionOfBall = 150;
   var topSpeedOfBall = 10;
   var leftSpeedOfBall = 0;
   var score1 = 0;
   var score2 = 0; 

   function startBall() {
    topPositionOfBall = 300;
    leftPositionOfBall = 250;

    
    leftSpeedOfBall = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    topSpeedOfBall = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
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
      
    
      document.getElementById('user-paddle').style.top = positionOfPaddle1 + 'px';
      document.getElementById('comp-paddle').style.top = positionOfPaddle2 + 'px';
     
      document.getElementById('ball').style.top = topPositionOfBall + 'px';
      document.getElementById('ball').style.top = leftPositionOfBall + 'px';
    }, 1000/60)
  
  
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  //function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    //$(document).off();
  }
  
   //}
  