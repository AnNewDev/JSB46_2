// 2 Cách khai báo
var firstName = "An"; // type string
var lastName = new String("Tuan"); // type object

// Nếu 1 trong 2 vế không phải number -> nối chuỗi
// template string
// console.log(`Toi la: ${firstName} ${lastName}`)
// console.log(firstName + " " + lastName)

// //back flash (\) chèn ký tự đặc biệt
// console.log("Đây là dấu \n \t \\ ")

// // Độ dài chuỗi
// console.log(firstName.length)

// Hàm bổ trợ
// 1. find index
// console.log(firstName.indexOf("W")) // -1
// console.log(firstName.search("A")) // -1
// console.log(firstName.lastIndexOf("n")) // -1

// 2. cắt chuỗi
// var subString = firstName.slice(0, -1); // "A"

// 3. replace + replace all
// var replaceString = firstName.replace("A", "0");
// console.log(replaceString)
// // var replaceAllString = firstName.replaceAll("p", "w")
// var replaceAllString = firstName.replaceAll(/A/g, ",")
// console.log(replaceAllString)

// 4. uppercase + lowercase
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())

// 5. trim
var str = "              ABC           "
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())

// 6. spilt (string -> array)
var numbers = "1,2,3,4,5,6,7,8,9"
console.log(numbers.split(",")) // -> array

// 7. get a character by index
// trả về chuỗi rỗng "" nếu index > length
console.log(firstName.charAt(15));
// trả về undefined nếu index > length
console.log(lastName[5])