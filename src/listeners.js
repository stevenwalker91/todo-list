
import * as display from './display.js';
import * as tasks from './tasks.js';

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
    display.addFormType('new');
    display.displayModal();
})


//listen for users closing the modal (they can also use keyboard shortcut)
const closeModalBtn = document.getElementById('closeModal');
closeModalBtn.addEventListener('click', display.closeModal)

const cancelBtn = document.getElementById('cancel-task');
cancelBtn.addEventListener('click', () => {
    display.closeModal();
    display.clearModal();
})


const form = document.getElementById('task-submission');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (form.dataset.formtype === 'new') {
        const formInputs = display.getFormInputs();
        //spread operator means i can just through all the inputs in a oner
        tasks.newTask(...formInputs);
        display.loadTasks();
    }

    //now clear down the form
    display.closeModal();
    display.clearModal();
})



const primaryMenuItems = document.querySelectorAll('.menu-items');
primaryMenuItems.forEach(item => {
    item.addEventListener('click', (event) => {
        display.updateCurrentView(event.target.dataset.display);
        display.loadTasks();
        display.updateActiveMenuItem(item);
        console.log(event.target);
    })
})
