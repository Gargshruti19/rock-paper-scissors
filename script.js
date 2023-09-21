let userScore = 0;
let compScore = 0;

const userScoreEl = document.querySelector(".user-score");
const compScoreEl = document.querySelector(".comp-score");
const displayMsg = document.querySelector(".result-msg");
const rockImg = document.getElementById("r");
const paperImg = document.getElementById("p");
const scissorImg = document.getElementById("s");
const newGameBtn = document.querySelector("#new-game");
//random computer choice function
function getComputerchoice() {
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
// convert to word function
function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	else return "Scissors";
}
//win lose draw function
function win(userChoice, computerChoice) {
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScoreEl.innerHTML = userScore;
	compScoreEl.innerHTML = compScore;

	displayMsg.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
		  beats  
		${convertToWord(computerChoice)}${smallCompWord}
		. You Win! 🔥`;
	userChoice_div.classList.add("green");

	setTimeout(function () {
		userChoice_div.classList.remove("green");
	}, 300);
	gameOver();
}
function lose(userChoice, computerChoice) {
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);

	compScore++;
	userScoreEl.innerHTML = userScore;
	compScoreEl.innerHTML = compScore;
	displayMsg.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
			  loses to
			${convertToWord(computerChoice)}${smallCompWord}
			. You Lost.... 🥲`;
	userChoice_div.classList.add("red");
	setTimeout(function () {
		userChoice_div.classList.remove("red");
	}, 300);
	gameOver();
}
function draw(userChoice, computerChoice) {
	const smallUserWord = "(user)".fontsize(3).sub();
	const smallCompWord = "(comp)".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);

	displayMsg.innerHTML = `${convertToWord(userChoice)}${smallUserWord}
			  equals
			${convertToWord(computerChoice)}${smallCompWord}
			. It's a drawww 🍎`;
	userChoice_div.classList.add("gray");
	setTimeout(function () {
		userChoice_div.classList.remove("gray");
	}, 300);
	gameOver();
}
//user choice function
function game(userChoice) {
	const computerChoice = getComputerchoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
	}
}
//game over function
function gameOver() {
	if (userScore === 10) {
		displayMsg.innerHTML = `GAME OVER!!!!! YOU ARE THE WINNER 🥳`;
		document.querySelector("body").style.backgroundColor = "red";
		document.querySelector(".result-msg").style.color = "white";
		document.querySelector(".user-score").style.color = "white";
	}
	if (compScore === 10) {
		displayMsg.innerHTML = `GAME OVER!!!!! YOU LOSE THE GAME 😓`;
		document.querySelector("body").style.backgroundColor = "red";
		document.querySelector(".result-msg").style.color = "white";
		document.querySelector(".comp-score").style.color = "white";
	}
}

//rock paper scissor click function
function main() {
	rockImg.addEventListener("click", function () {
		game("r");
	});
	paperImg.addEventListener("click", function () {
		game("p");
	});
	scissorImg.addEventListener("click", function () {
		game("s");
	});
}
main();
newGameBtn.addEventListener("click", function () {
	userScore = 0;
	compScore = 0;
	userScoreEl.textContent = 0;
	compScoreEl.textContent = 0;
	displayMsg.innerHTML = `Let's start the game....Again 💥`;
	document.querySelector("body").style.backgroundColor = "burlywood";
	document.querySelector(".result-msg").style.color = "black";
	document.querySelector(".user-score").style.color = "maroon";
	document.querySelector(".comp-score").style.color = "maroon";
});
