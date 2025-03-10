document.addEventListener("DOMContentLoaded", function () {
  

    document.getElementById("userTableBody").innerHTML = "";
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course1 = document.getElementById("course").value;
    let book = document.getElementById("bookName").value;



    addUserToTable({ name, email, book, course1 });



    document.getElementById("registrationForm").reset();
});

function addUserToTable(user) {
    let table = document.getElementById("userTableBody");
    let row = table.insertRow();
    row.insertCell(0).innerText = user.name;
    row.insertCell(1).innerText = user.email;
    row.insertCell(2).innerText = user.course1;
    row.insertCell(3).innerText = user.book;
}

function sortTable(columnIndex) {
    let table = document.querySelector("table tbody");
    let rows = Array.from(table.rows);

 

    let ascending = table.getAttribute("data-order") !== "asc";
    table.setAttribute("data-order", ascending ? "asc" : "desc");

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        let cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });



    rows.forEach(row => table.appendChild(row));
}


document.getElementById("searchInput").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#userTableBody tr");

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(filter) ? "" : "none";
    });
});
