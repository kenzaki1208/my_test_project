const result = document.getElementById("result");

function Bai1() {
    let inputPhysics = prompt("Nhập điểm môn vật lý");
    let inputChemistry = prompt("Nhập điểm môn hóa học");
    let inputBiology = prompt("Nhập điểm môn sinh học");
    let physics = parseInt(inputPhysics);
    let chemistry = parseInt(inputChemistry);
    let biology = parseInt(inputBiology);
    let average = (physics + chemistry + biology) / 3;
    result.innerHTML = `Bài 1:<br>
    Trung bình tổng 3 môn là: ${average}<br><br>`;
    // document.write("Bài 1:" + "<br/>")
    // document.write("Trung bình tổng 3 môn là: " + average + "<br/>" + "<br/>");
}

function Bai2() {
    let C = prompt("Nhập độ C");
    let Celsius = parseInt(C)
    let F = Celsius * 9 / 5 + 32;
    // template literal: `` (backtick), viet bieu thuc vao trong ${}, cho phep xuong xong ma ko phai cong chuoi
    result.innerHTML = `Bài 2:<br>Độ F là: ${F}<br><br>`;
    // document.write("Bài 2:" + "<br/>")
    // document.write("Độ F là: " + F + "<br/>" + "<br/>");
}

function Bai3() {
    let pi = 3.14;
    let r = prompt("Nhập bán kính hình tròn");
    let radius = parseInt(r);
    let acreage = radius * pi;
    // document.write("Diện tích hình tròn là: " + acreage);
    result.innerHTML = `Bài 3: <br> Diện tích hình tròn là : ${acreage}`
}

function Bai4() {
    let pi = 3.14;
    let r = prompt("nhập bán kính hình tròn")
    let radius = parseInt(r);
    let perimeter = 2 * pi * radius;
    // document.write("Chu vi hình tròn là: " + perimeter);
    result.innerHTML = `Bài 4: <br> Chu vi hình tròn là: ${perimeter}`
}



