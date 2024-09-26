const PLANT_DIV = document.getElementById("plant");
const DEFUSE_DIV = document.getElementById("defuse");

function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let pw = [];
    for (let i = 0; i < 10; i++) {
        pw[i] = chars.charAt(Math.random()*chars.length);
    }
    return pw.join("").toUpperCase();
}

const PASSWORD = generatePassword();
const BOMB_ID_ACTUAL = document.getElementById("bomb-id-actual");
BOMB_ID_ACTUAL.innerText = PASSWORD;

function switchPanel(defuse) {
    if (defuse) {
        DEFUSE_DIV.classList.remove("hidden");
        PLANT_DIV.classList.add("hidden");
    } else {
        DEFUSE_DIV.classList.add("hidden");
        PLANT_DIV.classList.remove("hidden");
    }
}