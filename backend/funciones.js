let dropdownIdCounter = 0;

function llenarCard(cardElement, datos) {
    if (!cardElement) return;
    
    const {
        titulo = 'add your task list',
        descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ducimus nobis illum dicta architecto voluptatem natus possimus commodi odit minus mollitia sunt placeat rem. Totam, quibusdam quaerat? Quam, nemo explicabo.</p>',
        imagen = '',
        footer = ''
    } = datos || {};

    const uniqueId = `dropdownMenuButton${dropdownIdCounter++}`;

    cardElement.innerHTML = `
        <div class="card">
            ${imagen ? `<img src="${imagen}" alt="${titulo}" class="card-img-top">` : ''}
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${descripcion}</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="${uniqueId}" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="${uniqueId}">
                        <li><a class="dropdown-item" href="#" onclick="editarCard(this.closest('.card-container'))">Editar</a></li>
                        <li><a class="dropdown-item" href="#" onclick="this.closest('.card-container').remove()">Eliminar</a></li>
                    </ul>
                </div>
            </div>
            ${footer ? `<div class="card-footer">${footer}</div>` : ''}
        </div>
    `;
}

function crearCard(datos) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card-container';
    llenarCard(cardElement, datos);
    return cardElement;
}

// Agrega esta función para editar la card (puedes implementarla según necesites)
function editarCard(cardContainer) {
    // Implementación de edición, por ejemplo, mostrar un modal o formulario
    console.log('Editar card:', cardContainer);
}