document.getElementById('addRowButton').addEventListener('click', addRow);

function addRow() {
    let tableBody = document.querySelector("#myTable tbody");
    let row = document.createElement("tr");
    row.innerHTML = `<td><input type="text" value="Item"></td>
        <td><input type="text" value="Description"></td>
        <td>
            <button onclick="editRow(this)">Edit</button>
            <button onclick="deleteRow(this)">Delete</button>
        </td>`;

    tableBody.appendChild(row);

}

function editRow(button) {
    let row = button.parentElement.parentElement;
    let inputs = row.querySelectorAll("input");

    if(button.textContent ==="Edit"){
        button.textContent = "Save";
        inputs.forEach(input => input.disabled = false);
    }else {
        button.textContent = 'Edit';
        inputs.forEach(input => input.disabled = true);
     
    }
   
}

function deleteRow(button) {
    let row = button.parentElement.parentElement;
    row.remove();

}
