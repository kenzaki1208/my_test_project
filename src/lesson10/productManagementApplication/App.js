let myList = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];

function displayProducts() {
    const productTable = document.getElementById("productList");
    const countProducts = document.getElementById("countProduct");

    const body = document.getElementById("productList");

    // productTable.innerHTML = "";
    //
    // myList.forEach((product, index) => {    //lặp qua mảng myList với product là giá trị và index là chỉ số
    //        productTable.innerHTML += `
    //             <tr id="row - ${index}">
    //                 <td>${product}</td>
    //                 <td><button onclick="editBtn(${index})">Edit</button></td>
    //                 <td><button onclick="deleteBtn(${index})">Delete</button></td>
    //             </tr>
    //        `;// thêm 1 hàng mới vào bảng table
    // })
    body.innerHTML = "";

    for (let i = 0; i < myList.length; i++) {
        body.innerHTML += `<tr>
                                <td>${myList[i]}</td>
                                <td><button onclick="editBtn(${i})">Edit</button></td>
                                <td><button onclick="deleteBtn(${i})">Delete</button></td>
                                <td></td>
                            </tr>`;
    }

    countProducts.innerHTML = `${myList.length} products`;     // cập nhật số lượng sản phẩm
}

displayProducts();

function addProduct() {
    const productName = document.getElementById("inputProduct").value;
    if (productName) {                  //kiểm tra productName ko rỗng
        myList.push(productName);       // thêm productName vào mảng mylist
        // document.getElementById("inputProduct").value = "";     //xóa nội dung trong input
        displayProducts();              // gọi hàm cập nhật giao diện
    }
}

function editBtn(value) {
    const newName = prompt("Nhập vào sản phẩm bạn muốn sửa: ", myList[value]);
    if (newName) {                              //kiểm tra newName ko phải là rỗng
        myList[value] = newName;         //cập trận giá trị tại value trong myList bằng newName đã bỏ khoảng trắng
        displayProducts();                      //gọi hàm cập nhật giao diện
    }
}

function deleteBtn(item) {
    if (confirm("Bạn có muốn xóa sản phẩm này ko ?")) {     //hiển thị hộp thoại xác nhận
        myList.splice(item, 1);                  //xóa 1 phần tử tại vị trí item trong myList
        displayProducts();                                  //gọi hàm cập nhật giao diện
    }
}