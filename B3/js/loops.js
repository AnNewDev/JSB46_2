// for: vòng lặp hữu hạn-----------------------------------
/**
 * bao gồm 3 đoạn mã khi viết vòng for ( không cần phái có du)
 * khai báo biến: chạy 1 lần duy nhất khi chạy loop
 * điều kiện đúng => mỗi lần chạy đều kiểm lại
 * tăng biến đếm => mỗi lần chạy đều thực thi
 */
for (let index = 1; index < 101; index++) {
    console.log(`This is ${index} times`);
  }
  var i = 0;
  for (; i < 100; ) {
    i++;
    console.log(i);
  }
  
  // duyet qua phan tu trong array
  var arr = new Array(10); // danh sach rong
  arr[0] = "a";
  for (let index = 0; index < arr.length; index++) {
    console.log(index + 1, ":", arr[index]); // undefined
  }
  
  arr.forEach((item) => console.log(item));