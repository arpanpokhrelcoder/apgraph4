// Paste this inside your <script> tags
let products = [];

// Function to handle Product Upload
function addProduct() {
    const title = document.getElementById('p-title').value;
    const price = document.getElementById('p-price').value;
    const link = document.getElementById('p-link').value;
    const category = document.getElementById('p-category').value;
    const fileInput = document.getElementById('p-image');

    if (!title || !price || !link || !fileInput.files[0]) {
        alert("Please fill all fields and upload a photo!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const newProduct = {
            id: Date.now(),
            title,
            price,
            link,
            category,
            image: e.target.result
        };

        products.push(newProduct);
        renderProducts(); // Refresh the home screen list
        toggleModal('product-modal'); // Close the popup
    };
    reader.readAsDataURL(fileInput.files[0]);
}

// Function to display products on the Home Screen
function renderProducts() {
    const container = document.getElementById('product-list');
    container.innerHTML = products.map(p => `
        <div class="card-glass p-3 mb-4 shadow-sm flex flex-col">
            <img src="${p.image}" class="w-full h-40 object-cover rounded-xl mb-3">
            <h4 class="font-bold text-lg">${p.title}</h4>
            <p class="text-blue-600 font-bold">Rs. ${p.price}</p>
            <span class="text-xs bg-gray-200 w-fit px-2 py-1 rounded mb-3">${p.category}</span>
            <a href="${p.link}" target="_blank" class="btn-premium text-center text-sm py-2">
                Buy on Daraz
            </a>
        </div>
    `).join('');
}
