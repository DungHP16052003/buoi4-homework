const cart = {
  products: [
    { id: 1, title: "san pham A", price: 200, quantity: 2 },
    { id: 2, title: "san pham B", price: 300, quantity: 4 },
    { id: 3, title: "san pham C", price: 230, quantity: 1 },
  ],

  getTotal: function() {
    let total = 0; // Khởi tạo tổng giá trị ban đầu là 0
    
    // Duyệt qua từng sản phẩm trong giỏ hàng
    for (let product of this.products) {
      total += product.price * product.quantity; // Tính giá trị của từng sản phẩm và cộng vào tổng
    }

    return total; // Trả về tổng giá trị đơn hàng
  }
};

console.log("Tổng đơn hàng:", cart.getTotal()); // In ra tổng đơn hàng
