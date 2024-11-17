const tasks = [
  { id: 1, task: "abc" },
  { id: 2, task: "xyz" },
  { id: 3, task: "mno" },
  { id: 4, task: "pqr" },
  { id: 5, task: "lhk" },
];

function addTask() {
  // lấy dữ liệu từ input field
  const taskName = document.querySelector("#task_input");
  // kiểm tra ngoại lệ
  if (!taskName.value.trim()) {
    alert("Please add content!");
    return;
  }
  // tạo id mới
  const id = tasks.length;
  // tạo object task
  const objectTask = { id: id, task: taskName.value };
  // add vào danh sách
  tasks.push(objectTask);
  // cập nhật giao diện
  showTaskList();
}

function editTask(id) {}

function deleteTask(id) {
    // get index of object in list
    const ind = -1;
    tasks.map(element, (index) => {
      if (element.id == id) {
        ind = index;
        return;
      }
    });
    if (ind != -1) {
      // delete trong danh sach
      tasks.splice(ind, 1);
      // show lai list moi
    } else {
      alert("Phan tu khong ton tai");
    }
  }

function showTaskList() {
  // Get task list in HTML
  const taskList = document.getElementById("task_list");
    // xóa hết dữ liệu cũ
    taskList.innerHTML = ""
  // For loop to add task
  tasks.forEach((element) => {
    const taskItem = document.createElement("li");
    taskItem.id = element.id;
    taskItem.innerHTML = `
        ${element.task}
        <button class="edit_btn">Edit</button>
        <button class="delete_btn">Delete</button>
        `;

    // Append the task item to the taskList
    taskList.appendChild(taskItem);
  });
}

// show task list when first load web
showTaskList();
// add event cho button add
document.getElementById("add_btn").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
