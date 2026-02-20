const buttonse1 = document.querySelectorAll("button");
const inputitem = document.getElementById("result");

for (let i = 0; i < buttonse1.length; i++) {
    buttonse1[i].addEventListener("click", () => {
        const buttonsvalue = buttonse1[i].textContent;

        if (buttonsvalue === "C") {
            clearResult();
        } 
        else if (buttonsvalue === "=") {
            calulateResult();
        } 
        else {
            appendvalue(buttonsvalue);
        }
    });
}

function clearResult() {
    inputitem.value = "";
}

function calulateResult() {
    try {
        let expression = inputitem.value;

        expression = expression.replace(/%/g, "/100");

        inputitem.value = eval(expression);
    } catch {
        inputitem.value = "Error";
    }
}



function appendvalue(buttonsvalue) {
    if (buttonsvalue === "x") {
        inputitem.value = inputitem.value.slice(0, -1);
    } 
    else {
        inputitem.value += buttonsvalue;
    }
}