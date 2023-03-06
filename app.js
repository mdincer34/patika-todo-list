let input = document.getElementById("task");
let list = document.getElementById("list");

const newElement = () => {
  if (input.value) {
    localStorage.setItem(localStorage.length, input.value);
    input.value = "";
    listing();
  }
};

const deleteItem = (id) => {
  localStorage.removeItem(id);
  listing();
};

const checkTasks = (id) => {
  let a = document.querySelectorAll("#list>li");
  a[id].style.backgroundColor = "green";
};

const listing = () => {
  list.innerHTML = "";
  const array = Object.keys(localStorage);
  array.map((key) => {
    const value = localStorage[key];
    return (list.innerHTML += `<li id=${key}>${value} <span class="btn btn-danger" id="deletebtn" onclick="deleteItem(${key})">delete</span>
     <span class="btn btn-success" id="check" onclick="checkTasks(${key})">check</span></li>`);
  });
};
listing();