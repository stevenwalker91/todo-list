
const modal = document.getElementById('taskModal');

const displayModal = () => {
    modal.style.display = 'flex';
}

const closeModal = () => {
    modal.style.display = 'none';
}



export {
    displayModal,
    closeModal
}