import * as display from './display.js'

//first add any keyboard shortcuts we want to use across the UI
document.addEventListener('keydown',  (event) => {
    const enteredChar = event.key;

    //if the user is typing in an input field, stop the function
    if (event.target.tagName == "INPUT" && enteredChar != 'Escape') {
        return;
    }
    switch(enteredChar) {
        case 'Escape':
            display.closeModal();
            break;
        case 'n':
            display.displayModal();
            break;
        case '+':
            display.displayModal();
            break;

    }
});

//listen for users clicking to add a new task and present them the modal
const newTaskBtn = document.getElementById('new-task');
newTaskBtn.addEventListener('click', () => {
    display.displayModal();
})


//listen for users closing the modal (they can also use keyboard shortcut)
const closeModalBtn = document.getElementById('closeModal');
closeModalBtn.addEventListener('click', () => {
    display.closeModal();
})

