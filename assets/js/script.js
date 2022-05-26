let checkboxList = document.querySelectorAll('input[type = "checkbox"]');
let delBtn = document.getElementById("del-btn");
let isChecked;
let id;
checkboxList.forEach((ele) => {
  ele.addEventListener("click", () => {
    isChecked = ele.checked;
    id = ele.value;
    console.log(isChecked, id);
  });
});
delBtn.addEventListener("click", () => {
  isChecked ? (delBtn.href = `/delete-task/?id=${id}`) : null;
});
