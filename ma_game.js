document.addEventListener('DOMContentLoaded', () => {
    const draggableItems = document.querySelectorAll('.draggable-ma');
    const contenedorDrop = document.querySelectorAll('.contenedor-drop-ma');

    draggableItems.forEach(item => {
        item.addEventListener('dragstart', dragStart);
    });

    contenedorDrop.forEach(contenedor => {
        contenedor.addEventListener('dragover', dragOver);
        contenedor.addEventListener('dragenter', dragEnter);
        contenedor.addEventListener('dragleave', dragLeave);
        contenedor.addEventListener('drop', drop);
    });

    const sendButton = document.getElementById('responses-ma');
    sendButton.addEventListener('click', sendResponses_ma);
});

let scored = false;

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    if (event.target.classList.contains('contenedor-drop-ma')) {
        event.target.style.border = '2px solid #333';
    }
}

function dragLeave(event) {
    if (event.target.classList.contains('contenedor-drop-ma')) {
    }
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedItem = document.getElementById(data);
    if (event.target.classList.contains('contenedor-drop-ma')) {
        event.target.appendChild(draggedItem);
        event.target.style.border = '2px dashed #333';
    }
}

function sendResponses_ma() {
    if (scored) {
        return;
    }

    const contenedores = document.querySelectorAll('.contenedor-drop-ma');

    contenedores.forEach(contenedor => {
        const items = contenedor.querySelectorAll('.draggable-ma');

        const userResponseTitle = document.createElement('h3');
        userResponseTitle.innerText = 'Tus respuestas:';
        contenedor.appendChild(userResponseTitle);

        items.forEach(item => {
            const expectedDuration = item.dataset.duration;
            const actualParentId = item.parentElement.id;
            const efficiency = item.dataset.efficiency;
            const methodName = item.dataset.name;

            if (expectedDuration === actualParentId) {
                item.style.backgroundColor = 'lightgreen';
            } else {
                item.style.backgroundColor = 'pink';
            }

            const p = document.createElement('p');
            p.innerText = `${methodName}: Tiene una eficacia de aprox. ${efficiency} y es de ${expectedDuration} )`;
            contenedor.appendChild(p);
        });

    });

    scored = true; 
    document.getElementById('responses-ma').disabled = true; 
}