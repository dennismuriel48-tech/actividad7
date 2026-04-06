function llenarCard(cardElement, datos) {
    if (!cardElement) return;
    
    const {
        titulo = 'add your task list',
        descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ducimus nobis illum dicta architecto voluptatem natus possimus commodi odit minus mollitia sunt placeat rem. Totam, quibusdam quaerat? Quam, nemo explicabo.</p>',
        imagen = '',
        footer = ''
    } = datos || {};

    cardElement.innerHTML = `
        <div class="card">
            ${imagen ? `<img src="${imagen}" alt="${titulo}" class="card-img-top">` : ''}
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${descripcion}</p>
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