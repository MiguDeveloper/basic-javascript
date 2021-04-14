const btnAdd = document.querySelector('#add');
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const table = document.querySelector('#table');
  const alert = document.querySelector('#alert');
  let id = 0;

  btnAdd.addEventListener('click', () => {
    addTodo();
  });

  const removeTodo = (idx) => {
    document.getElementById(idx).remove();
  };

  const addTodo = () => {
    if (!title.value || !description.value) {
      alert.classList.remove('d-none');
      alert.innerText = 'Titulo y description son obligatorios';
      return;
    }

    alert.classList.add('d-none');
    const row = table.insertRow();
    row.setAttribute('id', ++id);
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class="text-center">
      <input type="checkbox" />
    </td>
    <td class="text-right">
      <button class="btn btn-primary mb-1">
        <i class="fa fa-pencil"></i>
      </button>      
    </td>
    `;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.onclick = () => {
      removeTodo(row.getAttribute('id'));
    };
    row.children[3].appendChild(removeBtn);
  };
});
