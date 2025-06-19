let myList = ["Sony Xperia", "Samsung Galaxy", "Nokia 6"];

function displayProducts() {
    const productTable = document.getElementById("productList");
    const countProducts = document.getElementById("countProduct");
    productTable.innerHTML = "";

    myList.forEach((product, index) => {
           productTable.innerHTML += `
                <tr id="row - ${index}">
                    <td>${product}</td>
                    <td><button onclick="editBtn(${index})">Edit</button></td>
                    <td><button onclick="deleteBtn(${index})">Delete</button></td>
                </tr>
           `;
    })

    countProducts.innerHTML = `${myList.length} products`;
}

function addProduct() {
    const productName = document.getElementById("inputProduct").value.trim();
    if (productName) {
        myList.push(productName);
        document.getElementById("inputProduct").value = "";
        displayProducts();
    }
}

function editBtn(value) {
    const newName = prompt("Nhập vào sản phẩm bạn muốn sửa: " + myList[value]);
    if (newName) {
        myList[value] = newName.trim();
        displayProducts();
    }
}

function deleteBtn(item) {
    if (confirm("Bạn có muốn xóa sản phẩm này ko ?")) {
        myList.splice(item, 1);
        displayProducts();
    }
}