document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const link = document.getElementById("link");
    const list = document.getElementById("list");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== "") {
            const newItem = document.createElement("li");
            newItem.classList.add("row");
            newItem.innerHTML = `
                <div class="X"><img src="media/X blanca.svg" alt=""></div>
                <div class="cell">${taskText}</div>
                <div class="Check"><img src="media/check verde.svg" alt=""></div>
            `;
            list.appendChild(newItem);
            input.value = "";
            document.getElementById("messege-p").style.display = "none";
        } else {
            document.getElementById("messege-p").style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function deleteRow(button) {
        const row = button.closest('.row');
        row.remove();
    }

    const listContainer = document.getElementById('list');
    listContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('X') || event.target.closest('.X')) {
            const button = event.target.closest('.X') || event.target;
            deleteRow(button);
        }
    });

    const deleteButtons = document.querySelectorAll('.X');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            deleteRow(button);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function toggleColor(button) {
        const cell = button.closest('.row').querySelector('.cell');
        const currentColor = cell.style.color;
        cell.style.color = currentColor === 'green' ? '' : 'green';
    }

    const listContainer = document.getElementById('list');
    listContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('Check') || event.target.closest('.Check')) {
            const button = event.target.closest('.Check') || event.target;
            toggleColor(button);
        }
    });

    const checkButtons = document.querySelectorAll('.Check');

    checkButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            toggleColor(button);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const listContainer = document.getElementById('list');
    const addButton = document.getElementById('link');
    const input = document.getElementById('input');

    function addListItem(taskName) {
        const template = document.querySelector('.row');
        const newRow = template.cloneNode(true);
        newRow.querySelector('.cell').textContent = taskName;
        newRow.style.display = 'flex';
        listContainer.appendChild(newRow);
    }

    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        const taskName = input.value.trim();
        if (taskName !== '') {
            addListItem(taskName);
            input.value = '';
        }
    });

    listContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('X')) {
            event.target.closest('.row').remove();
        } else if (event.target.classList.contains('Check')) {
            const cell = event.target.closest('.row').querySelector('.cell');
            cell.style.color = cell.style.color === 'green' ? '' : 'green';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const listContainer = document.getElementById('list');
    const totalP = document.getElementById('total-p');

    function countRows() {
        const rows = listContainer.querySelectorAll('.row');
        return rows.length;
    }

    function updateTotalCount() {
        const totalRows = countRows();
        totalP.textContent = `Total: ${totalRows}`;
    }

    updateTotalCount();

    document.getElementById('link').addEventListener('click', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('input').value.trim();
        if (taskName !== '') {
            addListItem(taskName);
            updateTotalCount();
            document.getElementById('input').value = '';
        }
    });

    listContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('X')) {
            event.target.closest('.row').remove();
            updateTotalCount();
        } else if (event.target.classList.contains('Check')) {
            const cell = event.target.closest('.row').querySelector('.cell');
            cell.style.color = cell.style.color === 'green' ? '' : 'green';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const listContainer = document.getElementById('list');
    const totalP = document.getElementById('total-p');

    function countRows() {
        const rows = listContainer.querySelectorAll('.row:not(#base)');
        return rows.length;
    }

    function updateTotalCount() {
        const totalRows = countRows();
        totalP.textContent = `Total: ${totalRows}`;
    }

    updateTotalCount();

    document.getElementById('link').addEventListener('click', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('input').value.trim();
        if (taskName !== '') {
            addListItem(taskName);
            updateTotalCount();
            document.getElementById('input').value = '';
        }
    });

    listContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('X')) {
            event.target.closest('.row').remove();
            updateTotalCount();
        } else if (event.target.classList.contains('Check')) {
            const cell = event.target.closest('.row').querySelector('.cell');
            cell.style.color = cell.style.color === 'green' ? '' : 'green';
        }
    });

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                updateTotalCount();
            }
        });
    });

    observer.observe(listContainer, { childList: true });
});

// check
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");
    const link = document.getElementById("link");
    const list = document.getElementById("list");
    const totalP = document.getElementById('total-p');
    const completedP = document.getElementById('completed-p');

    link.addEventListener("click", function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== "") {
            const newItem = document.createElement("li");
            newItem.classList.add("row");
            newItem.innerHTML = `
                <div class="X"><img src="media/X blanca.svg" alt=""></div>
                <div class="cell">${taskText}</div>
                <div class="Check"><img src="media/check verde.svg" alt=""></div>
            `;
            list.appendChild(newItem);
            input.value = "";
            document.getElementById("messege-p").style.display = "none"; // Ocultar mensaje de error si estaba visible
            updateCounters();
        } else {
            document.getElementById("messege-p").style.display = "block"; // Mostrar mensaje de error si no se proporciona una tarea
        }
    });
})

