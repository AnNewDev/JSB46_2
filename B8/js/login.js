// Lấy url => kiểm tra xem đang ở trang nào
const pathname = location.pathname;
// [HOME]------------------------------------------------------------------------
if (
  pathname.includes("index.html") ||
  pathname.charAt(pathname.length - 1) == "/"
) {
  // Kiểm tra nếu chưa login => trang login
  if (!localStorage.getItem("currentUser")) {
    location.href = "./html/login.html";
  }
}

// [LOGIN] ----------------------------------------------------------------------
// kiểm tra thông tin đăng nhập

// Kiểm tra thông tin đăng ký

// Lưu dữ liệu cho đăng ký

// Bắt sự kiện cho button đăng nhập

// Bắt sự kiện cho button đăng ký
