// Recuperar los elementos de la página
const input = document.querySelector('input');
const addButton = document.querySelector('.btn-add');
const taskList = document.querySelector('ul');
const emptyMessage = document.querySelector('.empty');

// Función para actualizar el mensaje de "Todas las tareas están completadas"
const actualizarMensajeVacio = () => {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
};

// Función para crear una nueva tarea
const crearTarea = (textoTarea) => {
    // Crear un nuevo elemento de lista
    const li = document.createElement('li');

    // Crear un párrafo para el texto de la tarea
    const p = document.createElement('p');
    p.textContent = textoTarea;

    // Crear un botón de eliminación
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('btn-delete');

    // Añadir elementos al elemento de lista
    li.appendChild(p);
    li.appendChild(deleteButton);

    // Añadir el elemento de lista a la lista de tareas
    taskList.appendChild(li);

    // Añadir funcionalidad al botón de eliminación
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
        actualizarMensajeVacio();
    });

    // Limpiar el campo de entrada
    input.value = '';

    // Actualizar la visibilidad del mensaje de vacío
    actualizarMensajeVacio();
};

// Añadir un event listener al botón de agregar
addButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener el valor del input
    const textoTarea = input.value.trim();

    // Asegurarse de que el texto de la tarea no esté vacío
    if (textoTarea) {
        crearTarea(textoTarea);
    } else {
        alert('¡La tarea no puede estar vacía!');
    }
});

// Llamada inicial para actualizar la visibilidad del mensaje de vacío
actualizarMensajeVacio();
