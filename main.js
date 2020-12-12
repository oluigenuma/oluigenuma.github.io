const input = document.getElementById("input")
const output = document.getElementById("output")

let inputText = ""
const one = document.getElementById("1").onclick = add(1)
const two = document.getElementById("2").onclick = add(2)
const three = document.getElementById("3").onclick = add(3)
const four = document.getElementById("4").onclick = add(4)
const five = document.getElementById("5").onclick = add(5)
const six = document.getElementById("6").onclick = add(6)
const seven = document.getElementById("7").onclick = add(7)
const eight = document.getElementById("8").onclick = add(8)
const nine = document.getElementById("9").onclick = add(9)
const zero = document.getElementById("0").onclick = add(0)
const c = document.getElementById("C").onclick = reset

function add(n) {
    return () => {
        inputText += n
        input.innerHTML = inputText + "m"
        const value = Math.round(978 - (parseInt(inputText)-100) / 4.21348314607)
        output.innerHTML = Math.round(978 - (parseInt(inputText)-100) / 4.21348314607) + "°"

        if (value < 622) {
            reset()
        }
    }
}

function reset() {
    inputText = ""
    input.innerHTML = ""
    output.innerHTML = ""
}