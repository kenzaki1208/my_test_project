const wordInput = document.getElementById("wordInput");
const translateButton = document.getElementById("translateButton");
const translationSpan = document.getElementById("translation");

const dictionary = {
    'hello': 'xin chào',
    'world': 'thế giới',
    'example': 'ví dụ',
    'translate': 'dịch',
    'english': 'tiếng anh',
    'vietnamese': 'tiếng việt'
};

translateButton.addEventListener("click", () => {
    const word = wordInput.value.trim().toLowerCase();
    if (word in dictionary) {
        translationSpan.textContent = dictionary[word];
    } else {
        translationSpan.textContent = 'Undentified !';
    }
})