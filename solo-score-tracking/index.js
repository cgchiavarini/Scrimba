let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTeam = 0;
let guestTeam = 0;

function hbtn1() {
    homeTeam++;
    homeScore.textContent = homeTeam; 
}

function hbtn2() {
    homeTeam += 2;
    homeScore.textContent = homeTeam; 
}

function hbtn3() {
    homeTeam +=3;
    homeScore.textContent = homeTeam; 
}

function gbtn1() {
    guestTeam++;
    guestScore.textContent = guestTeam; 
}

function gbtn2() {
    guestTeam += 2;
    guestScore.textContent = guestTeam; 
}

function gbtn3() {
    guestTeam +=3;
    guestScore.textContent = guestTeam; 
}

function reset() {
    homeTeam = 0;
    guestTeam = 0;
    guestScore.textContent = guestTeam;
    homeScore.textContent = homeTeam; 
}