 function isPalindrome(str) {
    str = str.toLowerCase(); // ký tự thường = ký tự in hoa

    if (str === "") {           // nếu chuỗi bằng rỗng trả về true
        return true;
    } else if (str.length === 1) {          // nếu chuỗi bằng 1 cũng trả về true
        return true;
    }

    if (str[0] === str[str.length - 1]) {       //nếu ký tự đầu bằng ký tự cuối, ví dụ "rotor" thì r = r
        return isPalindrome(str.slice(1, str.length-1));    //trả về so sánh những ký tự còn lại ví dụ rotor thì so sánh oto
    } else {                                    //hàm slice sẽ trả về phần trích suất đầu và cuối,
        return false;                           //ở đây phần trên đã kiểm tra ký tự đầu và cuối rồi thì hàm slice sẽ bắt đầu từ phần tử thứ 2 và phần tử gần cuối
    }                                           //các trường hợp khác đều trả về false
 }

 let textInput = isPalindrome(prompt("Nhập vào 1 chữ bất kì: "));

 document.write("Chuỗi ký tự bạn vừa nhập vào có kết quả là: " + textInput + " => " +
     (textInput ? "Chuỗi ký tự có tính đối xứng" : "Chuỗi ký tự không có tính đối xứng"));