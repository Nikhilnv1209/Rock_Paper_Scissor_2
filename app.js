const game = () => {
  let Pscore = 0;
  let Cscore = 0;


  const match = document.querySelector(".match");
  // starting the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("FadeOut");
      match.classList.add("FadeIn");
    });
  };

  // play match
  const PlayMatch = () => {
    const playerhand = document.querySelector(".player-hand");
    const computerhand = document.querySelector(".computer-hand");
    const options = document.querySelectorAll(".options button");
    const hands = document.querySelectorAll(".hands img");

    // computer options
    const computeroptions = ["rock", "paper", "scissors"];

    // for removing animation at the animation end
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // function for buttons
    // here when we click on a button for player choice
    // then computer Choice will automatically generated
    // as a random number
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computeroptions[computerNumber];

        playerhand.src = './rock.png';
        computerhand.src = './rock.png';

        // this function is used to delay the hand change animation
        setTimeout(() => {
          // update images
          playerhand.src = `./${this.textContent}.png`;
          computerhand.src = `./${computerChoice}.png`;

          //here we will call the compare Function
          // this is refering to the choice that is clicked by the user
          compareHands(this.textContent, computerChoice);
          updateScore();
          
        }, 2000);
        
        setTimeout(() => {
        winnercheck();
        }, 2200);

        // add animation to hand action
        playerhand.style.animation = "shakeplayer 2s ease";
        computerhand.style.animation = "shakecomputer 2s ease";
      });
    });
  };

  // comparing Function to choose a winner and update
  // the score of the game

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a Tie";
      return;
    }

    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        Pscore++;
        return;
      } else {
        winner.textContent = "Computer Wins";
        Cscore++;
        return;
      }
    }
    //check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        Pscore++;
        return;
      } else {
        winner.textContent = "Computer Wins";
        Cscore++;
        return;
      }
    }
    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        Pscore++;
        return;
      } else {
        winner.textContent = "Computer Wins";
        Cscore++;
        return;
      }
    }
  };

  // Updating score

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = Pscore;
    computerScore.textContent = Cscore;
  };





  const winnercheck = () => {

    const winnermsg = document.querySelector('.winner_msg h2');
    const winnerdisplay = document.querySelector('.winner_msg');
    if(Pscore === 10){
      winnermsg.textContent = "Player Wins";
    }
    else if(Cscore === 10){
      winnermsg.textContent = "Computer Wins";
    }
    
    if(Pscore === 10 || Cscore === 10 )
    {
      winnerdisplay.classList.add('FadeIn');
      match.classList.remove('FadeIn');
      match.classList.add('FadeOut');
      return;
    }
  };










  // it calls the start game Function
  startGame();

  // playing match
  PlayMatch();
};

game();
