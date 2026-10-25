let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

let time = 0;
let timer = document.getElementById("timer");
let interval;

function startTimer() {
    if (interval) return;
    interval = setInterval(function () {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timer.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    pauseTimer();
    time = 0;
    timer.textContent = "00:00";
}


function incrementHome1() {
    homeCount = homeCount + 1
    homeScore.textContent = homeCount
    checkWinner()

}

function incrementHome2() {
    homeCount = homeCount + 2
    homeScore.textContent = homeCount
    checkWinner()

}

function incrementHome3() {
    homeCount = homeCount + 3
    homeScore.textContent = homeCount
    checkWinner()

}

function incrementGuest1() {
    guestCount = guestCount + 1
    guestScore.textContent = guestCount
    checkWinner()

}

function incrementGuest2() {
    guestCount = guestCount + 2
    guestScore.textContent = guestCount
    checkWinner()

}

function incrementGuest3() {
    guestCount = guestCount + 3
    guestScore.textContent = guestCount
    checkWinner()

}

function resetScores() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    resetTimer()
    checkWinner()
}

function checkWinner() {
    if (homeCount > guestCount) {
        homeScore.style.color = "green";
        guestScore.style.color = "red";
    } else if (guestCount > homeCount) {
        guestScore.style.color = "green";
        homeScore.style.color = "red";
    } else {
        homeScore.style.color = "white";
        guestScore.style.color = "white";
    }

}