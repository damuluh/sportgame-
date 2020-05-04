     let audio = new Audio('http://www.hazmatt.net/gaming/starcraft/zerg/units/hydralisk/spifir00.wav');
     
      

    //team-1 number of shots button functionality
    let team1numShotsButton = document.querySelector("#teamone-shoot-button");
    let team1numShots = document.querySelector("#teamone-numshots");
    let team1numgoals = document.querySelector("#teamone-numgoals");
    
    //add click function
    team1numShotsButton.addEventListener("click", function(){
        let currentShots = team1numShots.innerHTML;
        let newShots = parseInt(currentShots) + 1;
        team1numShots.innerHTML = newShots;
        audio.play();
        //team-1 goals
        let goals = 2;
        let currentgoals = team1numgoals.innerHTML;
        let newgoals = parseInt(currentgoals) +1;
        
        //if random number 1-4  = goals(2)
        if( Math.floor(Math.random() * 11)  >= goals)
        {
            team1numgoals.innerHTML = newgoals;
            document.body.style.backgroundColor = "#034BFC";
            document.body.style.color = "#FC7803";
        }
    });


    //team-2 number of shots button functionality
    let team2numShotsButton = document.querySelector("#teamtwo-shoot-button");
    let team2numShots = document.querySelector("#teamtwo-numshots");
    let team2numgoals = document.querySelector("#teamtwo-numgoals");
    
    //add click function
    team2numShotsButton.addEventListener("click", function(){
        let currentShots = team2numShots.innerHTML;
        let newShots = parseInt(currentShots) + 1;
        team2numShots.innerHTML = newShots;
        audio.play();
        

        //team-2 goals
        let goals = 5;
        let currentgoals = team2numgoals.innerHTML;
        let newgoals = parseInt(currentgoals) +1;
        
        //if random number 1-4  = goals(2)
        if( Math.floor(Math.random() * 11)  >= goals)
        {
            team2numgoals.innerHTML = newgoals;
            document.body.style.backgroundColor = "#034BFC";
            document.body.style.color = "#FC7803";
        }
    });

    //keep track of how many time the reset button was clicked. 
    let resetButton = document.querySelector("#reset-button");
    let numberOfResets = document.querySelector("#num-resets");

    //add click function
    resetButton.addEventListener("click", function(){
        let currentResets = numberOfResets.innerHTML;
        let newResets = parseInt(currentResets) + 1;
        numberOfResets.innerHTML = newResets;

        //Making a reset button that wipe the number of shots and scores
        team1numShots.innerHTML = 0;
        team2numShots.innerHTML = 0;
        team1numgoals.innerHTML = 0;
        team2numgoals.innerHTML = 0;
        document.body.style.backgroundColor = "#B9BABF";
        document.body.style.color = "#011CFC";
    });


//function end