const input = document.querySelector("input");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector("button");
const remainChanges = document.querySelector(".chances");

input.focus();

const resetGame = () => {
    randomNum = Math.floor(Math.random() * 100);
    chance = 10;
    input.disabled = false;
    remainChanges.textContent = chance;
    guess.textContent = "";
    guess.style.color = "#333";
    input.value = "";
    checkButton.textContent = "check";
}

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum)
let chance = 10;

checkButton.addEventListener("click", () => {
    if (input.disabled) {
        resetGame();
        return;
    }

    chance--;

    let inputValue = input.value;
    if (inputValue == randomNum) {
        [guess.textContent, input.disabled] = ["Chúc mừng bạn đã đoán đúng", true];
        [checkButton.textContent, guess.style.color] = ["Chơi lại", "27ae60"];
    } else if (inputValue > randomNum && inputValue < 100) {
        [guess.textContent, remainChanges.textContent] = ["Bạn đoán gần đúng rồi", chance];
        guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) {
        [guess.textContent, remainChanges.textContent] = ["Bạn đoán sai số xa quá", chance];
        guess.style.color = "#333";
    } else {
        [guess.textContent, remainChanges.textContent] = ["Số bạn đoán ko tồn tại", chance];
        guess.style.color = "e74c3c";
    }

    if (chance == 0) {
        [checkButton.textContent, input.disabled, inputValue] = ["Chơi lại", true, ""];
        [guess.textContent, guess.style.color] = ["Bạn đã thua cuộc", "e74c3c"];
    }

});
