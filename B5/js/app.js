// khai bao function ----------------------

// cach 1: function co ten
// ham sum: param : a, b => return a + b

function sum(a, b) {
  return a + b;
}

// goi lai ham de thuc thi
console.log(sum(1, 3));

// cach 2: ham khong ten
const sum_2 = function (a, b) {
  return a + b;
};
console.log(sum_2(1, 2));

// ham hello: truyền tham số name -> consolelog: hello + name
const hello = function (name) {
  console.log(`hello ${name}`);
};
//không return -> in ra giá trị: undefined
console.log(hello("Nguyen Van A"));


// Lưu giá trị key:value trong localStorage
// Nếu value khác kiểu dữ liệu string => không hiển thị được
localStorage.setItem("name", {})
// Mở dev tool -> Application -> Local Storage
// Xem key:value trong localStorage
// Lấy giá trị (value) dữ liệu thông qua key
console.log(localStorage.getItem("name"));

