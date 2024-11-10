// Khai báo (declare) --------------------------------
var myObj = {
  "full name": "Tuan An",
  age: 16,
};

// object constructor (xây dựng đối tượng - hàm tạo)
// Định nghĩa đối tượng (bản vẽ)

// declaration function
var user_A;

// expression function
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return this.firstName + "" + this.lastName;
  };
}

// Tạo đối tượng
var me = new User("Tuan", "An", "...");
console.table(me);
console.log(me.constructor === User);
console.log(me.__proto__);
// object thường
const student = { name: "abc", age: 12 };
console.table(student);
console.log(student.constructor);
console.log(student.__proto__);
/**
 * Nếu đối tượng tạo từ object constructor # object thường
 * Khi in đối tượng sẽ có thêm phần __proto__ => mở ra: constructor
 *
 */

// Thêm thuộc tính ---------------------------------------------------
me.class = null;
console.table(me);
console.log(me.__proto__);

// object prototype --------------------------------------------------
// Thêm 1 thuộc tính
// Không nhận được giá trị truyền vào từ constructor
User.prototype.email = "abc@gmail.com";
User.prototype.getEmail = function () {
  return this.email;
};

const other = new User("abc", "abc", "...");
console.table(other);

// read, update ------------------------------------------------------
me.firstName = "ABC";
me["lastName"] = "XYZ";
console.table(me);

console.log(me["abc"]); //undefined
console.log(me.abc?.id); //undefined

// delete ------------------------------------------------------------
delete me["class"];
delete me.avatar;
console.table(me);
