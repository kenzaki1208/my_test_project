 function isPalindrome(str) {
    str = str.toLowerCase();

    if (str === "") {
        return true;
    } else if (str.length === 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length-1));
    } else {
        return false;
    }
 }

 let textInput = isPalindrome(prompt("Nhập vào 1 chữ bất kì: "));

 document.write("Chuỗi ký tự bạn vừa nhập vào có kết quả là: " + textInput + " => " +
     (textInput ? "Chuỗi ký tự có tính đối xứng" : "Chuỗi ký tự không có tính đối xứng"));