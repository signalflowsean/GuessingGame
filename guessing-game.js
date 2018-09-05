importPackage(java.io); 
importPackage(java.lang); 

var numGuesses = 0; 
var prevGuess = -1; 
var sumGuesses = 0; 

let binarySearch = (lowLim, upLim) => {

    //converts strings to numbers
    lowLim = Number(lowLim); 
    upLim = Number(upLim); 

    //safety check 
    if (lowLim > upLim) return; 

    let num = Math.floor((lowLim + upLim) /2); 

    let isCorrect = checkAnswer( num); 
    if (isCorrect) return; 

    print("is this the number: " + num + "? Enter h for too high, l for too low"); 

    let dir = readline(); 
    if (dir == "h")
    {         
        binarySearch(lowLim, num-1);     
    }   
    else if (dir == "l")
    { 
        binarySearch(num + 1, upLim); 
    }
}

let checkAnswer = (currGuess) => { 
    numGuesses++;   
    if ((prevGuess === currGuess -1) || (prevGuess === currGuess + 1)){ 
        print (currGuess + ": is the number you guessed!!!"); 
        print ("it took: " + numGuesses + " guesses"); 
        sumGuesses+= numGuesses; 
        return true; 
    } 
    prevGuess = currGuess; 
    return false; 

}

let readline = () => {
    var ist = new InputStreamReader(System.in); 
    var bre = new BufferedReader(ist); 
    var line = bre.readLine();

    return line;
}

var numGames = 0; 

let playGame = () => { 
    let game = true; 

    print("Welcome to the coolest guessing game ever!"); 
    print("You are going to pick a number from 1 to what?: ");
    var upperLim=readline();
    binarySearch(1, upperLim); 

    while (game) { 
        numGames++; 
        let avg = sumGuesses / numGames; 
        print("Avg is: " + avg + " gueeses for " + numGames + " games"); 
        
        print("Do you want to play again (y/n)");
        var isAgain = readline(); 
        if (isAgain == "y"){ 
            binarySearch(1, upperLim);     
        } 
        else  {
            game = false; 
            return; 
        }
    }
}
playGame(); 
