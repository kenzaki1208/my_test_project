// let C = prompt("Nhập độ C");
// let Celsius = parseInt(C)
// let F = Celsius * 9/5 + 32;
// document.write("Bài 2:" + "<br/>")
// document.write("Độ F là: " + F + "<br/>" + "<br/>");

function Bai2() {
    let C = prompt("Nhập độ C");
    let Celsius = parseInt(C)
    let F = Celsius * 9 / 5 + 32;
    // template literal: `` (backtick), viet bieu thuc vao trong ${}, cho phep xuong xong ma ko phai cong chuoi
    result.innerHTML = `Bài 2:<br>Độ F là: ${F}<br><br>`;
    // document.write("Bài 2:" + "<br/>")
    // document.write("Độ F là: " + F + "<br/>" + "<br/>");
}