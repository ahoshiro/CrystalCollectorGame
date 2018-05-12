$(document).ready(function() {
    // Script variables for the Crystal Game       
        var stringTarget="", wins=0, losses=0, randomTarget=0, scoreInt=0, crystal1value=0, crystal2value=0, crystal3value=0, crystal4value=0, initText="", 
        isTargetOver=false, isCalculated=false, victory="", defeat="", messages="", scoreText="";

        // setup();      
    // Initialize section
    function setup() {       
        messages = {
                victory: 'You Rock! No pun inteded. Click on a crystal for a new game.',
                defeat: 'Try again pizza boy! Too hard for you eh? Try your luck again by clicking on a crystal.',
                gameon: 'Careful! Dont go over bust! Choose a crystal wisely!',               
                };
                console.log(messages.victory);

        // Loads a number for the randomTarget from 19 to 120. Random 100 numbers with an offset of 19
            randomTarget = [Math.floor((Math.random()*101)+19)];
            stringTarget = randomTarget.toString();
            console.log("This is the Target number: " + randomTarget);
            console.log("String Target: " + stringTarget);
            document.getElementById("targetRandomNumber").innerHTML = stringTarget;
        // Loads a random number for the crystals from 1-12
            crystal1value = (Math.floor(Math.random()*12)+1);
            crystal2value = (Math.floor(Math.random()*12)+1);
            crystal3value = (Math.floor(Math.random()*12)+1);
            crystal4value = (Math.floor(Math.random()*12)+1);
            console.log("This is the Crystal 1 number:" + crystal1value);
            console.log("This is the Crystal 2 number:" + crystal2value);
            console.log("This is the Crystal 3 number:" + crystal3value);
            console.log("This is the Crystal 4 number:" + crystal4value);                
            console.log(messages.initText);                          
        };
            window.onload = setup();
        
        function run(){
            
            if (isTargetOver == false){
                console.log("isTargetOver value= "+ isTargetOver);

                $("#crystal-icon1").click(function(){                                   
                    console.log(scoreInt);
                    console.log(crystal1value);
                    scoreInt = crystal1value + scoreInt;                  
                    console.log(scoreInt);
                    eval();
                });
                $("#crystal-icon2").click(function(){                                   
                    scoreInt = crystal2value + scoreInt; 
                    eval();                                 
                });                   
                $("#crystal-icon3").click(function(){                                 
                    scoreInt = crystal3value + scoreInt; 
                    eval();                                
                });
                $("#crystal-icon4").click(function(){                           
                    scoreInt = crystal4value + scoreInt;  
                    eval();                                
                });
                $("#reset").click(function(){
                    scoreInt=0;
                    wins=0;
                    losses=0;
                    setup();
                });

            };                           
        };
        
        function eval(){
            scoreText = scoreInt.toString();
            document.getElementById("score").innerHTML = (scoreText);
            document.getElementById("resultText").innerHTML = (messages.gameon);
            
            if (scoreInt < randomTarget){
                console.log("Not there yet");
            }
            else {
                isTargetOver = true;
                userSel();
                console.log(isTargetOver);         
            };
        };

        function userSel(){
                console.log("In userSel");           
            if (scoreInt > randomTarget) {
                document.getElementById("resultText").innerHTML = (messages.defeat);                
                    losses= losses + 1;
                    console.log("losses: "+losses);
                    document.getElementById("losses").innerHTML = "Losses: "+(losses);
                    scoreInt=0;
                    setup();
            }
            else if(scoreInt == randomTarget) {
                document.getElementById("resultText").innerHTML = (messages.victory);
                wins= wins + 1;
                console.log("wins: "+wins);
                document.getElementById("wins").innerHTML = "Wins: "+(wins);
                scoreInt=0;
                setup();
            }
                            
        };

            run();
});
            
