// let inputPhysics = prompt("Nhập điểm môn vật lý");
// let inputChemistry = prompt("Nhập điểm môn hóa học");
// let inputBiology = prompt("Nhập điểm môn sinh học");
// let physics = parseInt(inputPhysics);
// let chemistry = parseInt(inputChemistry);
// let biology = parseInt(inputBiology);
// let average = ( physics + chemistry + biology ) / 3;
// document.write("Bài 1:" + "<br/>")
// document.write("Trung bình tổng 3 môn là: " + average + "<br/>" + "<br/>");

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



