// noinspection JSAnnotator

const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => { // gắn sự kiện click cho từng nút
        const buttonValue = buttons[i].textContent; // lấy nội dung văn bản với các nút đc nhấn
        if (buttonValue === "AC") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    display.value = "";
}

function calculateResult() {
    try {
        const value = display.value;
        debugger;
        if (/[-+*/^√%]$/.test(display.value)) {
            alert("Biểu thức không hợp lệ, vui lòng hoàn thiện!");
            return;
        }
        if (value.includes("√")) {
            const number = parseInt(value.replace("√", ""));
            const result = Math.sqrt(number);
            display.value = result;
            console.log(result);
        }
        else if (value.includes("^")) {
            const parts = value.split("^"); // Tách chuỗi bằng cơ số và mũ
            if (parts.length === 2) { // đảm bảo chuỗi đúng định dạng a^b
                const base = parseFloat(parts[0]); // cơ số
                const exponent = parseFloat(parts[1]); // số mũ
                if (!isNaN(base) && !isNaN(exponent)) { // kiểm tra cả 2 đều ko phải NaN
                    display.value = Math.pow(base, exponent);
                }
            }
            else {
                display.value = "Error"
            }
        }
        else if (value.includes("%")) {
            const part = value.split("%"); //tách chuỗi thành số chia và bị chia
            if (part.length === 2) { // đảm bảo đúng định dạng a%b
                const divided = parseFloat(part[0]); // số bị chia
                const divisor = parseFloat(part[1]); // số chia
                if (!isNaN(divided) && !isNaN(divisor)) { // kiểm tra 2 số đều hợp lệ
                    if (divisor !== 0) { //kiểm tra xem số bị chia khác 0
                        display.value = divided % divisor; // tính phần dư
                    }
                    else {
                        display.value = "ko thể chia cho 0";
                    }
                } else {
                    display.value = "số bị chia hoặc số chia ko phù hợp";
                }
            }
        }
        else {
            const result = eval(display.value);
            console.log(result);
        }
        // display.value = eval(display.value);
    } catch (e) {
        alert("Lỗi: Biểu thức không hợp lệ!");
        display.value = "";
    }
}

function appendValue(buttonValue) {
    if (typeof buttonValue === 'string') {
        display.value += buttonValue;
    } else {
        console.error("Invalid buttonValue:", buttonValue);
    }
}