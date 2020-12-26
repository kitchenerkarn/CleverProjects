// Challenge 1:

function ageInDays() {
    let birthYear = prompt("Enter your birth year.");
    let today = new Date();
    let currentYear = today.getFullYear();
    if (birthYear == 0){
        birthrYear = currentYear;
    };
    if (birthYear > null){
        birthrYear = birthYear;
    };
    let ageDays = (currentYear - birthrYear) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("You are " + ageDays + " days old.");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function daysReset() {
    document.getElementById("ageInDays").remove();
}

function generateCat() {
    let image = document.createElement("img");
    let div = document.getElementById("flex-cat-gen");
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image)
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer Choice: ", botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDB = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": {"scissors": 0, "rock": 1, "paper": 0.5},
        "scissors": {"scissors": 0.5, "rock": 0, "paper": 1},
    };

    let yourScore = rpsDB[yourChoice][computerChoice];
    let computerScore = rpsDB[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {"message": "You lost!", "color": "red"};
    } else if (yourScore === 0.5) {
        return {"message": "It's a tie!", "color": "yellow"};
    } else {
        return {"message": "You won!", "color": "green"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    let humanDiv = document.createElement("div");
    let botDiv = document.createElement("div");
    let messageDiv = document.createElement("div");

    humanDiv.innerHTML = '<img src="' + imagesDatabase[humanImageChoice] + '" width=150 height=150 style="box-shadow: 0px 10px 50px rgba(37,50,233,1);">'
    messageDiv.innerHTML = '<h1 style="color: ' + finalMessage["color"] + ';" font-size: 60px; padding:30px>' + finalMessage["message"] + '</h1>';
    botDiv.innerHTML = '<img src="' + imagesDatabase[botImageChoice] + '" width=150 height=150 style="box-shadow: 0px 10px 50px rgba(243,38,24,1);">'
    
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);

}