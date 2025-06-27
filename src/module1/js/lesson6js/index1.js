let year = parseInt(prompt("Xin mời nhập năm nay"));
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            alert(year + " Năm nay là năm nhuận");
        }
        else {
            alert(year + " Năm nay ko phải là năm nhuận");
        }
    }
    else {
        alert(year + " Năm nay là năm nhuận");
    }
}
else {
    alert(year + " Năm nay ko phải là năm nhuận")
}