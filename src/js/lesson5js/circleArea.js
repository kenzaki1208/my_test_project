function Bai3() {
    let pi = 3.14;
    let r = prompt("Nhập bán kính hình tròn");
    let radius = parseInt(r);
    let acreage = radius * pi;
    // document.write("Diện tích hình tròn là: " + acreage);
    result.innerHTML = `Bài 3: <br> Diện tích hình tròn là : ${acreage}`
}