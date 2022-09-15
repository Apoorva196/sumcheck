document.getElementById("firstNumber").textContent = Math.ceil(Math.random() * 100);
document.getElementById("secondNumber").textContent = Math.ceil(Math.random() * 100);

function restart() {
    let element = document.getElementById("firstNumber").textContent = Math.ceil(Math.random() * 100);
    let element1 = document.getElementById("secondNumber").textContent = Math.ceil(Math.random() * 100);
    document.getElementById("userInput").value = " ";
    document.getElementById("gameResult").textContent = "";
}

function check() {
    let value1 = document.getElementById("firstNumber").textContent;
    let value2 = document.getElementById("secondNumber").textContent;
    let sum = parseInt(value1) + parseInt(value2);
    console.log(sum);
    let inputs = document.getElementById("userInput").value;
    console.log(inputs);
    if (sum == inputs) {
        document.getElementById("gameResult").textContent = "Congratulations! You got it right";
        document.getElementById("gameResult").style.backgroundColor = "#028a0f";
        document.getElementById("gameResult").style.color = "white";
    } else {
        document.getElementById("gameResult").textContent = "Please Try Again!";
        document.getElementById("gameResult").style.backgroundColor = "#1e217c";
        document.getElementById("gameResult").style.color = "white";
    }
}
