const registeredUser = [];

function createUser(name, password, email) {
  if (!name || !password || !email) {
    throw new Error("Thông tin không đầy đủ, lỗi dừng chương trình ");
  }
  return { name, password, email, role: "user" };
}
function register(...userObjects) {
  for (const user of userObjects) {
    const { name, password, email } = user;

    try {
      const newUser = createUser(name, password, email);
      registeredUser.push(newUser);
      return registeredUser;
    } catch (error) {
      console.error("lỗi", error.message);
      throw error();
    }
  }
}
try {
    console.log("Lần đăng ký 1:");
    console.log(register(
        { name: "Dung", password: "password123", email: "dung@example.com" },
        { name: "Phuong", password: "123456", email: "haphuong@example.com" }
    ));

    console.log("Lần đăng ký 2:");
    console.log(register(
        { name: "DieuChi", password: "DieuChi789", email: "dieuchi@example.com" }
    ));
} catch (error) {
    console.error("Đăng ký thất bại:", error.message);
}
function login(email, password) {
    const user = registeredUsers.find(
        (user) => user.email === email && user.password === password
    );
    if (user) {
        return user; 
    } else {
        return "Thông tin đăng nhập không hợp lệ."; 
    }
}

try {
    console.log("Đăng ký người dùng:");
    console.log(register(
        { name: "Dung", password: "password123", email: "dung@example.com" },
        { name: "Alice", password: "alice456", email: "alice@example.com" }
    ));

    console.log("\nĐăng nhập hợp lệ:");
    console.log(login("dung@example.com", "password123")); 


    console.log("\nĐăng nhập không hợp lệ:");
    console.log(login("dung@example.com", "wrongpassword")); 
    console.log(login("unknown@example.com", "password123")); 
} catch (error) {
    console.error("Lỗi:", error.message);
}