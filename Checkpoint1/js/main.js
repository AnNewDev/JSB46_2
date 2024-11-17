// Mảng chứa thông tin các thẻ
const cards = [
  { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
  { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
  { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
  { name: "bird", img: "https://via.placeholder.com/100?text=Bird" },
  { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
  { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
  { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
  { name: "bird", img: "https://via.placeholder.com/100?text=Bird" },
];

// Trộn ngẫu nhiên các thẻ
cards.sort(() => Math.random() - 0.5);

// Biến trạng thái trò chơi
let diemSo = 0; // Điểm số của người chơi
let theThuNhat = null; // Thẻ đầu tiên được chọn
let theThuHai = null; // Thẻ thứ hai được chọn
let khoaLuoi = false; // Khóa lưới trong khi kiểm tra

// Tham chiếu tới các phần tử HTML
const luoi = document.querySelector(".luoi"); // Lưới thẻ
const hienThiDiem = document.getElementById("diem-so"); // Hiển thị điểm số

// Tạo lưới thẻ
function taoLuoi() {
  cards.forEach((the) => {
    // Tạo phần tử thẻ
    const phanTuThe = document.createElement("div");
    phanTuThe.classList.add("the");
    phanTuThe.dataset.name = the.name;

    // Thêm ảnh vào thẻ
    const anh = document.createElement("img");
    anh.src = the.img;
    phanTuThe.appendChild(anh);

    // Thêm thẻ vào lưới
    luoi.appendChild(phanTuThe);

    // Gắn sự kiện click để lật thẻ
    phanTuThe.addEventListener("click", latThe);
  });
}

// Xử lý khi lật thẻ
function latThe() {
  if (khoaLuoi || this === theThuNhat) return; // Nếu lưới bị khóa hoặc thẻ đang chọn lại chính nó, thoát

  this.classList.add("lat");

  if (!theThuNhat) {
    // Lần đầu lật thẻ
    theThuNhat = this;
  } else {
    // Lần thứ hai lật thẻ
    theThuHai = this;
    khoaLuoi = true;

    kiemTraTrung();
  }
}

// Kiểm tra hai thẻ có trùng không
function kiemTraTrung() {
  const trungKhop = theThuNhat.dataset.name === theThuHai.dataset.name;

  if (trungKhop) {
    // Hai thẻ trùng
    voHieuHoaThe();
    capNhatDiem();
  } else {
    // Không trùng
    latLaiThe();
  }
}

// Vô hiệu hóa hai thẻ trùng nhau
function voHieuHoaThe() {
  setTimeout(() => {
    theThuNhat.removeEventListener("click", latThe);
    theThuHai.removeEventListener("click", latThe);
    resetTrangThai();
  }, 1000);
}

// Lật lại hai thẻ không trùng
function latLaiThe() {
  setTimeout(() => {
    theThuNhat.classList.remove("lat");
    theThuHai.classList.remove("lat");
    resetTrangThai();
  }, 1000);
}

// Cập nhật điểm số
function capNhatDiem() {
  diemSo++;
  hienThiDiem.textContent = `Điểm: ${diemSo}`;
}

// Reset trạng thái sau mỗi lượt
function resetTrangThai() {
  [theThuNhat, theThuHai] = [null, null];
  khoaLuoi = false;
}

// Bắt đầu trò chơi
taoLuoi();
