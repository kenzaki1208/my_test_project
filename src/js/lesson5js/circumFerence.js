function Bai4() {
    let pi = 3.14;
    let r = prompt("nhập bán kính hình tròn")
    let radius = parseInt(r);
    let perimeter = 2 * pi * radius;
    // document.write("Chu vi hình tròn là: " + perimeter);
    result.innerHTML = `Bài 4: <br> Chu vi hình tròn là: ${perimeter}`
}