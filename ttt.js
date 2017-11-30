/*

# playTurn(index)
It should take one parameter which is a zero-based index to your grid, indicating where the current player's token should be played.
It should return a boolean value to indicate whether the move was allowed or not - true if it was successful, false otherwise 
e.g. if the square is already taken or the game is over.

# isGameOver()
It should return a true or false if the game is over.

# whoWon()
It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player one. 
It should return 3 if the game is a draw.

# restart()
It should restart the game so it can be played again.

*/
var log = [];

function playTurn(index){

	for (var i = 0; i < (log.length+1); i++){
		if(index == log[i]){
			// log.push(index);
			return false;
		}
	}
	log.push(index);
	// console.log(log);
	return true;
}

function isGameOver(){
	if(playTurn() == false){
		return false;
	}
	return true;
}

function whoWon(){
	if(isGameOver() == false && playTurn() == true){return 1;}
	if(isGameOver() == true && playTurn() == true && index%2){return 2;}
	if(isGameOver() == false){return 0;} 
	return 3;
}

function restart(){
	index = 0;
	log = [];
}