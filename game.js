const piglet = {
    name: "Piglet",
    health: 100,
    hits:0,
    image: 'assets/piglet.png'
}

const waffles = {
    name: "Waffles",
    health:100,
    hits: 0,
    image: 'assets/waffles.png'
}

let nowPig = waffles
let pigs = [piglet, waffles]
const pigImg = document.getElementById('pig-img')
const hits = document.getElementById('hits')
const targetName = document.getElementById('targetName')
const slapButton = document.getElementById('slap-button');


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
function setNowPig(pigIndex) {
    nowPig = pigs[pigIndex]
  
    draw()
  }
update()