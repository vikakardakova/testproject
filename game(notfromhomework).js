const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "scissors" || userInput === "paper" || userInput === "rock")
    {
      return userInput
      }
    else 
    {
      //console.log ("incorrect value")
    }
    }
    
    //console.log(getUserChoice('fork'));
    
    function getComputerChoice ()
    {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
      return 'scissors'
    }
    }
    
    
    //console.log (getComputerChoice ());
    
    
    function determineWinner (userChoice, computerChoice) 
    {
    if (userChoice === 'bomb') {
      return 'user won!!!';
     };
    
    {
      if (userChoice === computerChoice) {
        return "tie"
     };
    
     if (userChoice === 'rock')
    {
      if (computerChoice === "paper") {
     return "computer won"
     } else {
      return "user won";
     }
    }
}

    
      if (userChoice === 'paper')
    {
      if (computerChoice === "scissors") {
     return "computer won"
     } else {
      return "user won";
     }
     }
    
    
    
     if (userChoice === 'scissors')
    {
      if (computerChoice === "rock") {
     return "computer won"
     } else {
      return "user won";
     }
    }
}
     //console.log (determineWinner ('paper', 'scissors'));
    
    //  function playGame () {
    //   let userChoice = getUserChoice('paper');
    //  }
    //  console.log (userChoice);
    
    //  let computerChoice = getComputerChoice();
    //  console.log (computerChoice);
    
    
    const playGame = () => {
      const userChoice = getUserChoice('bomb');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('The computer threw:' + computerChoice);
      console.log (determineWinner(userChoice, computerChoice));
    };
    playGame();