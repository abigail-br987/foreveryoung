document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square_bc');
    const modals = document.querySelectorAll('.modal_bc');
    const closeButtons = document.querySelectorAll('.close');

    squares.forEach(square => {
        square.addEventListener('click', () => {
            const modalId = square.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-close');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});