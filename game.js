const piglet = {
    name: "Piglet",
    health: 100,
    hits:0,
    image: 'assets/piglet.png',
    items: []
}

const waffles = {
    name: "Waffles",
    health:100,
    hits: 0,
    image: 'assets/waffles1.png',
    items: []
}


let nowPig = piglet
let pigs = [piglet, waffles]

let items = {
    feed: {name:"Feed",modifier: 5, description: "Feed the pig"},
    hug: {name:"Hug",modifier: 10, description: "Hug the pig"},
    love: {name:"Love", modifier: 20 ,description:"Love the pig"}
}


const pigImg = document.getElementById('pig-img')
const hits = document.getElementById('hits')
const targetName = document.getElementById('targetName')
const slapButton = document.getElementById('slap-button');
const punchButton = document.getElementById('punch-button')
const kickButton = document.getElementById('kick-button')
const feedButton = document.getElementById('feed-button')
const hugButton = document.getElementById('hug-button')
const loveButton = document.getElementById('love-button')
const item = document.getElementById('items')

function slap() {
    nowPig.health -= 1
    nowPig.hits++;
    draw();
    update();
}

function punch() {
    nowPig.health  -=5;
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

function feed() {
nowPig.health +=5
nowPig.items.push(items.feed)
draw()
update()
}

function hug() {
    nowPig.health +=10
nowPig.items.push(items.hug)
draw ()
update()
}

function love() {
    nowPig.health +=20
nowPig.items.push(items.love)
draw ()
update()
}
function giveItem(item) {
    nowPig.items.push(items[item])
}


function draw() {
    pigImg.setAttribute('src',nowPig.image)
    targetName.innerText = nowPig.name
    hits.innerText = nowPig.hits.toString()
    if (nowPig.health <= 0) {
        nowPig.health === 0
        slapButton.disabled = true;
        punchButton.disabled = true;
        kickButton.disabled = true;
        nowPig.pigImg = "assets/bacon.png"
    }

}
function addMods() {
    let runningModTotal = 1
    for (let i = 0; i < nowPig.items.length; i++) {
        var item = nowPig.items[i];
        runningModTotal += item.modifier
    }
    return runningModTotal
}

function update() {
    document.getElementById('health').innerText = nowPig.health.toString()
    document.getElementById('hits').innerText = nowPig.hits.toString()
    document.getElementById('targetName').innerText = nowPig.name
}


function setNowPig() {
    nowPig = pigs[1]
  
    draw()
  }
 
update()

draw()