let stavKonta = 1000;
const cenaTocky = 250;
const jackpot = 5000;
const cenaUtechy = 500;

document.addEventListener("DOMContentLoaded", function() {
    const herniCisla = document.getElementById("statistky");
    herniCisla.innerText = `STAV TVÉHO KONTA: ${stavKonta}`;
});

document.getElementById("hraciButton").addEventListener("click", function() {
    zmenEmojiOpakovane(9);
    odeberCenuTocky();
    checkGameOver();
});

function odeberCenuTocky() {
    stavKonta -= cenaTocky;
    const herniCisla = document.getElementById("statistky");
    herniCisla.innerText = `POZÚSTATEK: ${stavKonta}`;
}

function zmenEmojiOpakovane(pocetZmen) {
    let intervalId = setInterval(function() {
        hazardniHra1();
        hazardniHra2();
        hazardniHra3();

        pocetZmen--;

        if (pocetZmen === 0) {
            clearInterval(intervalId);

            // Kontrola výhry
            if (hazardniHra1() == hazardniHra2() && hazardniHra2() == hazardniHra3() && hazardniHra1() == hazardniHra3()) {
                zobrazWin();
                stavKonta += jackpot;
                konecHry();
            } else if (hazardniHra1() == hazardniHra2() || hazardniHra2() == hazardniHra3() || hazardniHra1() == hazardniHra3()) {
                herniCisla.innerText = `VYHRAL JSI CENU UTĚCHY: +${cenaUtechy}`;
                stavKonta += cenaUtechy;
            }
        }
    }, 100);
}

function hazardniHra1() {
    let textDiv1 = document.getElementById("textDiv1");
    let nahodnaEmoji1 = generujNahodneEmoji();
    textDiv1.innerText = nahodnaEmoji1;
    return nahodnaEmoji1;
}

function hazardniHra2() {
    let textDiv2 = document.getElementById("textDiv2");
    let nahodnaEmoji2 = generujNahodneEmoji();
    textDiv2.innerText = nahodnaEmoji2;
    return nahodnaEmoji2;
}

function hazardniHra3() {
    let textDiv3 = document.getElementById("textDiv3");
    let nahodnaEmoji3 = generujNahodneEmoji();
    textDiv3.innerText = nahodnaEmoji3;
    return nahodnaEmoji3;
}

function generujNahodneEmoji() {
    var emojiPole = ["🥦", "🕺", "💰", "👻", "🌈", "🦄", "🎱"];
    var nahodnyIndex = Math.floor(Math.random() * emojiPole.length);
    return emojiPole[nahodnyIndex];
}

function zobrazWin() {
    const winDiv = document.createElement("div");
    winDiv.innerHTML = "WIN";
    winDiv.style.fontSize = "100%";
    winDiv.style.position = "absolute";
    winDiv.style.top = "50%";
    winDiv.style.left = "50%";
    winDiv.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(winDiv);
}

function checkGameOver() {
    if (stavKonta <= 0) {
        const gameOverDiv = document.createElement("div");
        gameOverDiv.innerHTML = "GAME OVER";
        gameOverDiv.style.fontSize = "500%";
        gameOverDiv.style.color = "white";
        gameOverDiv.style.backgroundColor = "black";
        gameOverDiv.style.fontFamily = "fantasy";
        gameOverDiv.style.position = "absolute";
        gameOverDiv.style.top = "50%";
        gameOverDiv.style.left = "50%";
        gameOverDiv.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(gameOverDiv);

        const hraciButton = document.getElementById("hraciButton");
        hraciButton.disabled = true;
        konecHry();
    }
}

function konecHry() {
    // Další akce nebo logika po skončení hry
}
