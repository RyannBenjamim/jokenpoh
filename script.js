let pedra = document.getElementById("pedra")
let papel = document.getElementById("papel")
let tesoura = document.getElementById("tesoura")
let res = document.getElementById("res")
let placar = document.getElementById("placar")

var jogador_esc = 0
var jog_pontos = 0
var pc_pontos = 0

function clickPedra() {
    pedra.style.border = "solid 2.5px green"
    papel.style.border = "solid 2px black"
    tesoura.style.border = "solid 2px black"
    jogador_esc = 1
}

function clickPapel() {
    papel.style.border = "solid 2.5px green"
    pedra.style.border = "solid 2px black"
    tesoura.style.border = "solid 2px black"
    jogador_esc = 2
}

function clickTesoura() {
    tesoura.style.border = "solid 2.5px green"
    pedra.style.border = "solid 2px black"
    papel.style.border = "solid 2px black"
    jogador_esc = 3
}

function play() {
    const numeros = [1, 2, 3];
    const pc_esc = Math.floor(Math.random() * numeros.length);
    console.log(numeros[pc_esc]); // resultado aleatório

    let pedra = document.createElement("img")
    pedra.setAttribute("src", "esc_pedra.png")
    pedra.setAttribute("class", "elementos")
    let pedra2 = document.createElement("img")
    pedra2.setAttribute("src", "esc_pedra.png")
    pedra2.setAttribute("class", "elementos")
    let papel = document.createElement("img")
    papel.setAttribute("src", "esc_papel.png")
    papel.setAttribute("class", "elementos")
    let papel2 = document.createElement("img")
    papel2.setAttribute("src", "esc_papel.png")
    papel.setAttribute("class", "elementos")
    let tesoura = document.createElement("img")
    tesoura.setAttribute("src", "esc_tesoura.png")
    tesoura.setAttribute("class", "elementos")
    let tesoura2 = document.createElement("img")
    tesoura2.setAttribute("src", "esc_tesoura.png")
    tesoura2.setAttribute("class", "elementos")
    let x = document.createElement("img")
    x.setAttribute("src", "marca-x.png")
    x.setAttribute("class", "elementos")

    res.innerHTML = ""
    placar.innerHTML = ""
    placar.style.textAlign = "center"
    // Se o jogador escolher Pedra
    if (jogador_esc == 1) {
        if (pc_esc == 1) {
            // Pedra x Pedra // Empate
            res.appendChild(pedra)
            res.appendChild(x)
            res.appendChild(pedra2)
            jog_pontos++
            pc_pontos++
            placar.innerHTML += `${jog_pontos} x ${pc_pontos}`
        } else if (pc_esc == 2) {
            // Pedra x Papel // Derrota
            res.appendChild(pedra)
            res.appendChild(x)
            res.appendChild(papel)
            pc_pontos++
            placar.innerHTML += `${jog_pontos} x ${pc_pontos}`
        } else {
            // Pedra x Tesoura // Vitória
            res.appendChild(pedra)
            res.appendChild(x)
            res.appendChild(tesoura)
            jog_pontos++
            placar.innerHTML += `${jog_pontos} x ${pc_pontos}`
        }
    }
    // Se o jogador escolhes Papel
    if (jogador_esc == 2) {
        if (pc_esc == 1) {
            // Papel x Pedra // Vitória
            res.appendChild(papel)
            res.appendChild(x)
            res.appendChild(pedra)
        } else if (pc_esc == 2) {
            // Papel x Papel // Empate
            res.appendChild(papel)
            res.appendChild(x)
            res.appendChild(papel2)
        } else {
            // Papel x Tesoura // Derrota
            res.appendChild(papel)
            res.appendChild(x)
            res.appendChild(tesoura)
        }
    }
    // Se o jogador escolher tesoura
    if (jogador_esc == 3) {
        if (pc_esc == 1) {
            // Tesoura x Pedra // Derrota
            res.appendChild(tesoura)
            res.appendChild(x)
            res.appendChild(pedra)
        } else if (pc_esc == 2) {
            // Tesoura x Papel // Vitória
            res.appendChild(tesoura)
            res.appendChild(x)
            res.appendChild(papel)
        } else {
            // Tesoura x Tesoura // Empate
            res.appendChild(tesoura)
            res.appendChild(x)
            res.appendChild(tesoura2)
        }
    }
}