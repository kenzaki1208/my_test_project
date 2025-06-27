// Bài 1:
let i = 10;
let f = 20.5;
let b = true;
let s = 'Hà Nội';

document.write('Bài 1:');
document.write('<br/>');
document.write('i = ' + i);
document.write('<br/>');
document.write('f = ' + f);
document.write('<br/>');
document.write('b = ' + b);
document.write('<br/>');
document.write('s = ' + s);
document.write('<br/>');
document.write('<br/>');
document.write('Bài 2:');

// Bài 2:
let width = 20;
let height = 10;
let area = width * height;
document.write('<br/>');
document.write('Area = ' + area);

// Bài 3:
a = prompt("Nhập số thứ nhất: ");
b = prompt("nhập số thứ hai: ");
if ( a%b == 0 ) {
    alert("a chia hết cho b")
}
else {
    alert("a ko chia hết cho b")
}