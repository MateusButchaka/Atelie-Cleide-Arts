let productList = [];

function updateProductList() {
    const productListContainer = document.getElementById('product-list');
    productListContainer.innerHTML = ''; 

    productList.forEach((product, index) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Preço: $${product.price.toFixed(2)}</p>
            <img src="${product.image}" alt="${product.name}" />
            <button class="edit-button" data-index="${index}">Editar</button>
            <button class="delete-button" data-index="${index}">Excluir</button>
        `;

        productItem.querySelector('.edit-button').addEventListener('click', () => {
            editProduct(index);
        });

        productItem.querySelector('.delete-button').addEventListener('click', () => {
            deleteProduct(index);
        });

        productListContainer.appendChild(productItem);
    });
}

function addProduct(product) {
    productList.push(product);
    updateProductList();
}

function deleteProduct(index) {
    productList.splice(index, 1);
    updateProductList();
}

function editProduct(index) {
    const editProductForm = document.getElementById('edit-product-form');
    const editForm = document.getElementById('edit-form');

    const product = productList[index];
    document.getElementById('edit-product-name').value = product.name;
    document.getElementById('edit-product-description').value = product.description;
    document.getElementById('edit-product-price').value = product.price.toFixed(2);
    document.getElementById('edit-product-image').value = product.image;

    editProductForm.style.display = 'block';
    const addProductForm = document.getElementById('product-form');
    addProductForm.style.display = 'none';

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();

        product.name = document.getElementById('edit-product-name').value;
        product.description = document.getElementById('edit-product-description').value;
        product.price = parseFloat(document.getElementById('edit-product-price').value);
        product.image = document.getElementById('edit-product-image').value;

        updateProductList();
        editProductForm.style.display = 'none';

        addProductForm.style.display = 'block';
    });

    const cancelEditButton = document.getElementById('cancel-edit-button');
    cancelEditButton.addEventListener('click', () => {
        editProductForm.style.display = 'none';
        addProductForm.style.display = 'block';
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const productImage = document.getElementById('product-image').value;

    if (!productName || !productDescription || isNaN(productPrice) || !productImage) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const newProduct = {
        name: productName,
        description: productDescription,
        price: productPrice,
        image: productImage,
    };

    addProduct(newProduct);

    productForm.reset();
}

const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', handleFormSubmit);
