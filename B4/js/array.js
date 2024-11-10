// Khởi tạo -----------------------------------------------------------------------------
var arr = [1, 2.5, "a", function () {}, {}, null, undefined];
var arr2 = new Array([1, 2.5, "a", function () {}, {}, null, undefined]);
console.log(typeof arr);
// Cách kiểm tra array hay object
console.log(Array.isArray(arr2)); // true
console.log(Array.isArray({})); // false

// Truy xuất mảng
console.log(arr.length);
console.log(arr[4]); // Lấy phần tử theo index

// Các hàm bổ trợ

// Lỗi khi clone/ copy array
var clone_arr = arr;
clone_arr[1] = "abc";
console.table(clone_arr);
console.table(arr);
// => spread operator
var clone = [...arr2];
clone.push(10);
console.table(clone);
console.table(arr2);

// tostring ---------------------------------------------------------------------------------
console.log(arr.toString());

// join -------------------------------------------------------------------------------------
var arr1 = [1, 2, 3];
console.log(arr1.join(" - "));

// pop --------------------------------------------------------------------------------------
// Lấy phần tử ở vị trí cuối
// return lại list sau khi đã xóa phần tử
console.log(arr2.pop()); // Xóa phần tử cuối cùng

//.pop(); //undefined

// shift, unshift
// shift: xóa phần tử đầu tiên của mảng + return lại phần tử đã xóa
console.log(arr.shift());
console.log([].shift()); //undefined

//unshift: Thêm phần tử đầu tiên trong mảng + return độ dài mới
console.log(arr.unshift(123));

// splicing ---------------------------------------------------------------------------------
var subArr = arr.splice(1, 2); // xóa 2 phần tử tính từ index 1
console.log(subArr);
// Chèn thêm 6 phần tử vào vị trí thứ nhất, 0 là không xóa ai
var subArr1 = arr.splice(1, 0, 6);
console.log(subArr1);

// Thay thế vị trí thứ 1 thành 6
var subArr2 = arr.splice(1, 1, 6);
console.log(subArr2);

// concat ------------------------------------------------------------------------------------
// Nối arr
var arr3 = [5, 6, 7];
const a = arr3.concat([1, 2, 3]);
console.table(a);

// slicing -----------------------------------------------------------------------------------
// Cắt 2 phần tử tính từ vị trí thứ 2 từ sau ra trước
// return mảng mới
const b = a.slice(-2, 2);
console.log(arr3.slice(-2, 2));
