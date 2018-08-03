
let targetName = "Piglet";
let hits = 0;
const slapButton = document.getElementById('slap-button');

const piglet = {
    name: "Piglet",
    health: 100,
}

const waffles = {
    name: "Waffles",
    health:100,
}

let nowPig = piglet
let pigs = [piglet, waffles]


function slap() {
    health--;
    hits++;
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
    document.getElementById('health').innerText = piglet.health.toString()
    document.getElementById('hits').innerText = hits.toString()
    document.getElementById('targetName').innerText = targetName
}

update()