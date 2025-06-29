// Stock Management Logic
let stock = JSON.parse(localStorage.getItem('stock')) || [
  { name: 'Tomatoes', qty: 120 },
  { name: 'Wheat', qty: 80 }
];

function renderStockTable() {
  const tbody = document.getElementById('stock-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  stock.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>
        <button onclick="updateQty(${idx}, 1)">+</button>
        <button onclick="updateQty(${idx}, -1)" ${item.qty <= 0 ? 'disabled' : ''}>-</button>
        <button onclick="removeProduct(${idx})">Remove</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
window.updateQty = function(idx, delta) {
  stock[idx].qty += delta;
  if (stock[idx].qty < 0) stock[idx].qty = 0;
  localStorage.setItem('stock', JSON.stringify(stock));
  renderStockTable();
};
window.removeProduct = function(idx) {
  stock.splice(idx, 1);
  localStorage.setItem('stock', JSON.stringify(stock));
  renderStockTable();
};
const addForm = document.getElementById('add-product-form');
if (addForm) {
  addForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('product-name').value.trim();
    const qty = parseInt(document.getElementById('product-qty').value, 10);
    if (name && qty > 0) {
      stock.push({ name, qty });
      localStorage.setItem('stock', JSON.stringify(stock));
      renderStockTable();
      addForm.reset();
    }
  };
}
if (document.getElementById('stock-table-body')) renderStockTable();

// Analytics (simple example)
if (document.getElementById('analytics-summary')) {
  const totalProducts = stock.length;
  const totalQty = stock.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('analytics-summary').innerHTML = `
    <h3>Current Stock Overview</h3>
    <p>Total Products: <strong>${totalProducts}</strong></p>
    <p>Total Stock Quantity: <strong>${totalQty}</strong></p>
    <p>Keep updating your stock for better insights!</p>
  `;
}

// Welcome message on home
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
  window.onload = () => {
    console.log('Welcome to Farmeur Support Dashboard');
  };
}
