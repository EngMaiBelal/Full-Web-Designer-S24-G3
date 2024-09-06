

document.querySelector("#to_do_add_btn").addEventListener("click", () => {
  let to_do_name = document.querySelector("#to_do_name");
  if (to_do_name.value == "") {
    alert("Please Enter a to do list name");
    return false;
  }
  const li = document.createElement("li");
  let liContainer = `  <div class="to-do-item">
    <div class="to-do">${to_do_name.value}</div>
    <div class="actions">
      <span class="done">&#10003;</span>
      <span class="delete">&#10006;</span>
    </div>
  </div>`;
  li.innerHTML = liContainer;

  li.querySelector(".delete").addEventListener("click", (e) => {
    e.currentTarget.closest("li").remove();
  });
  li.querySelector(".done").addEventListener("click", (e) => {
    e.currentTarget.closest("li").classList.add("to_do_done");
  });
  document.querySelector("#to_do_list").appendChild(li);
  to_do_name.value = "";
});
