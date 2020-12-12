const input = document.getElementById("input")
const output = document.getElementById("output")
const history = document.getElementById("history")
const c = document.getElementById("C")

let inputText = ""
document.getElementById("1").onclick = add(1)
document.getElementById("2").onclick = add(2)
document.getElementById("3").onclick = add(3)
document.getElementById("4").onclick = add(4)
document.getElementById("5").onclick = add(5)
document.getElementById("6").onclick = add(6)
document.getElementById("7").onclick = add(7)
document.getElementById("8").onclick = add(8)
document.getElementById("9").onclick = add(9)
document.getElementById("0").onclick = add(0)
c.onclick = reset

function add(n) {
    return () => {
        if (inputText == "") {
            history.innerHTML = input.innerHTML + " " + output.innerHTML
        }
        inputText += n
        if (calc(inputText) < 622) {
            reset()
            inputText = n + ""
        }
        input.innerHTML = inputText + "m"
        output.innerHTML = calc(inputText) + "°"
        dynamicStart()
    }
}

function calc(n) {
    return Math.round(978 - (parseInt(n)-100) / 4.21348314607)
}

function reset() {
    inputText = ""
    changeBg("grey-bg")
    changeClr("color-dark")
}

let timer
function dynamicStart() {
    if (timer) {
        clearTimeout(timer)
    } else {
        changeBg("yellow-bg")
        changeClr("color-light")
    }
    timer = setTimeout(() => {
        timer = null
        if (calc(inputText) > 978) {
            return
        }
        inputText = ""
        changeBg("grey-bg")
        changeClr("color-dark")
    }, 2000)
}

function changeBg(bg) {
    c.classList.remove("yellow-bg")
    c.classList.remove("grey-bg")
    c.classList.add(bg)
}

function changeClr(clr) {
    input.classList.remove("color-light")
    input.classList.remove("color-dark")
    input.classList.add(clr)
}