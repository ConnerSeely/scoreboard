var x = 0;
var y = 0;

function team1point() {
    x += 2
    console.log(x)
    let team1score = document.getElementById("team1score")
    console.log(team1score)
    team1score.innerText = x.toString()
}

function team1point3() {
    x += 3
    console.log(x)
    let team1score = document.getElementById("team1score")
    console.log(team1score)
    team1score.innerText = x.toString()
}

function team2point() {
    y += 2;
    console.log(y)
    let team2score = document.getElementById("team2score")
    console.log(team2score)
    team2score.innerText = y.toString()
}

function team2point3() {
    y += 3
    console.log(y)
    let team2score = document.getElementById("team2score")
    console.log(team2score)
    team2score.innerText = y.toString()
}

let teams = {
    Home: { Name: '100Thieves', players: '____' },
    Away: { Name: 'SKT T1', players: '____' }
}