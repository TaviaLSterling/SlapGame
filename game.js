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
const punchButton = document.getElementById('punch-button')
const kickButton = document.getElementById('kick-button')

function draw() {
    pigImg.setAttribute('src', nowPig.image)
    targetName.innerText = nowPig.name
    hits.innerText = nowPig.hits.toString()
    if (nowPig.health <= 0) {
        slapButton.disabled = true;
        punchButton.disabled = true;
        kickButton.disabled = true;
    }
}
function slap() {
    nowPig.health--;
    nowPig.hits++;
    draw();
    update();
}

function punch() {
    nowPig.health -=5;
    nowPig.hits++;
    draw();
    update()
}

function kick() {
    nowPig.health -=10;
    nowPig.hits++;
    draw()
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