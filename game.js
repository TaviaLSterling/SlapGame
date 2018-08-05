const piglet = {
    name: "Piglet",
    health: 100,
    hits:0,
    image: 'assets/piglet.png',
    ittems: []
}

const waffles = {
    name: "Waffles",
    health:100,
    hits: 0,
    image: 'assets/waffles1.png',
    ittems: []
}
let feed = {
name: 'Feed',
modifier: 5,
description: "Yum!"
}
let hug = {
    name: 'Hug',
    modifier: 10,
    description: "*Hugs*"
}
let love = {
    name: 'Love',
    modifier: 20,
    description: "This pig loves you too!"
}

let items = {
    feed:new Item("Feed",5,"Feed the pig"),
    hug:new Item("Hug",10,"Hug the pig"),
    love:new Item("Love",20,"Love the pig")
}

let nowPig = piglet
let pigs = [piglet, waffles]

const pigImg = document.getElementById('pig-img')
const hits = document.getElementById('hits')
const targetName = document.getElementById('targetName')
const slapButton = document.getElementById('slap-button');
const punchButton = document.getElementById('punch-button')
const kickButton = document.getElementById('kick-button')
const feedButton = document.getElementById('feed-button')
const hugButton = document.getElementById('hug-button')
const loveButton = document.getElementById('love-button')

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

function feed() {
nowPig.items.push(items.feed.modifier)
}

function hug() {
nowPig.items.push(items.hug.modifier)
}

function love() {
nowPig.items.push(items.love.modifier)
}

function addMods() {
    for (let i = 0; i < nowPig.ittems.modifier.length; i++) {
        const element = nowPig.ittems.modifier[i];
        
    }
}

function update() {
    document.getElementById('health').innerText = nowPig.health.toString()
    document.getElementById('hits').innerText = nowPig.hits.toString()
    document.getElementById('targetName').innerText = nowPig.name
}
function setNowPig(pigIndex) {
    nowPig = pigs[pigIndex]
  
    draw()
  }
update()