var health = 100;
let targetName = "Waffles";
let hits = 0;
const slapButton = document.getElementById('slap-button');

function slap() {
    health--;
    hits++;
    alert(health);
    update();
}

function punch() {
    health -=5;
    hits++;
    update()
}

function kick() {
    health -=10;
    hits++;
    update()
}
function update() {
    document.getElementById('health').innerText = health.toString()
    document.getElementById('hits').innerText = hits.toString()
    document.getElementById('targetName').innerText = targetName
}

update()