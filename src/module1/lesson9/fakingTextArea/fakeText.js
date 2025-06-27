let array = []; //mảng rỗng
array[1] = "T";
array[2] = "Ô";
array[3] = "I";
array[4] = " ";
array[5] = "L";
array[6] = "À";
array[7] = " ";
array[8] = "M";
array[9] = "Ộ";
array[10] = "T";
array[11] = " ";
array[12] = "T";
array[13] = "H";
array[14] = "Ằ";
array[15] = "N";
array[16] = "G";
array[17] = " ";
array[18] = "N";
array[19] = "G";
array[20] = "Ố";
array[21] = "C";
array[22] = "!";
array[23] = "!";
array[24] = "!";

let counter = 1;    // chỉ số hiện tại trong mảng array
let text = '';      // chuỗi lưu trữ các kí tự

function fake() {
    document.getElementById("txt").value = "";
    setTimeout(function () {                  // settimeout để trì hoãn việc biến đổi kí tự
        if (counter < array.length) {                // kiểm tra xem counter có nhỏ hơn array ko mới hoạt động tiếp
             text += array[counter++];               // thêm kí tự array vào chuỗi text sau đó tăng counter lên 1
            document.getElementById("txt").value = text;
        } else {
            counter = 1;                        // nếu counter > array.length thì sẽ reset counter về 1
            text = '';                          // và trả lại chuỗi rỗng
        }
    }, 1);
}