import * as projects from './projects.js';
import * as tasks from './tasks.js';
import { formatDistance } from 'date-fns';

//we'll maintain a variable that shows the current view so we can retrieve
//the relevant tasks
let currentView = 'inbox';

//some global variables that will be used by multiple functions
const modal = document.getElementById('taskModal');
const form = document.getElementById('task-submission');
const formElements = form.querySelectorAll('input, select, textarea');


const displayModal = () => {
    modal.style.display = 'flex';
}

const closeModal = () => {
    modal.style.display = 'none';
}

//clear down the modal forms for if its submitted or user explicitly cancels
const clearModal = () => {
    formElements.forEach(element => {
        element.value = '';
    })
}

const addProjectsToTaskForm = () => {
    const projectDropdown = document.getElementById('task-project');
    const listOfProjects = projects.projectList;
    let elements = [];
    //add a blank value to the list so user doesn't have to select a project
    const blankElement = document.createElement("option");
    elements.push(blankElement);

    //iterate over the list of projects adding each as an option for the dropdown
    listOfProjects.forEach(project => {
        const element = document.createElement("option");
        element.value = project.id;
        element.innerText = project.title;
        elements.push(element);
    })

    //replaceChildren function will remove any options already there and add all from fresh
    //removes the need to compare what's there to prevent duplication
    projectDropdown.replaceChildren(...elements);
}

//iterate through the elements in the form and add values to an array which is returned
const getFormInputs = () => {
    let formInputs = [];
    formElements.forEach(element => formInputs.push(element.value));
    return formInputs;
}

//add data attribute to form to determine whether it's editing or creating a new task
const addFormType = (updateType) => {
    form.dataset.formtype = updateType;
}

//function to load tasks to the UI
const loadTasks = (project) => {
    const taskContainer = document.getElementById('tasks-container');
    const listOfTasks = tasks.getTasks(currentView, project);

    let elements = [];

    //build up the html
    listOfTasks.forEach(task => {
        //take title
        const taskElement = document.createElement('div');
        taskElement.classList = 'task';
        if (task.priority === 'high') {
            taskElement.classList += ' priority'
        }
        if (task.priority === 'low') {
            taskElement.classList += ' low-priority'
        }

        const taskTitle = document.createElement('div');
        taskTitle.classList = 'task-title';
        taskElement.appendChild(taskTitle);

        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox';
        taskTitle.appendChild(checkBox);

        const title = document.createElement('p');
        title.innerText = task.title;
        title.classList = 'task-text';
        taskTitle.appendChild(title);

        //task controls 

        const controlsContainer = document.createElement('div');
        controlsContainer.classList = 'task-controls';
        taskElement.appendChild(controlsContainer);

        const dateContainer = document.createElement('span');
        dateContainer.classList = 'due-date';
        dateContainer.innerText = _formatDate(task.dueDate);
        controlsContainer.appendChild(dateContainer);


        const infoBtn = document.createElement('span');
        infoBtn.classList = 'material-symbols-outlined icon-btn task-info';
        infoBtn.innerHTML = 'info';
        infoBtn.dataset.itemid = task.id;
        controlsContainer.appendChild(infoBtn);

        const editBtn = document.createElement('span');
        editBtn.classList = 'material-symbols-outlined icon-btn edit-task';
        editBtn.innerText = 'edit_note';
        editBtn.dataset.itemid = task.id;
        controlsContainer.appendChild(editBtn);

        editBtn.addEventListener('click', (event) => {
            addFormType('edit');
            addProjectsToTaskForm();
            loadExistingTaskInForm(event.target.dataset.itemid);
            displayModal();
        })

        const deleteBtn = document.createElement('span');
        deleteBtn.classList = 'material-symbols-outlined icon-btn delete-task';
        deleteBtn.innerHTML = 'delete';
        deleteBtn.dataset.itemid = task.id;
        controlsContainer.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', (event) => {
            if (confirm(`Are you sure you want to delete this task? \n\n ${task.title}`)) {
                tasks.deleteTask(event.target.dataset.itemid);
                loadTasks();
            }

        })

        elements.push(taskElement);
    })

    taskContainer.replaceChildren(...elements);
}


const updateCurrentView = (view) => {
    currentView = view;

}

const updateActiveMenuItem = (newActiveMenuItem) => {
    const oldActiveMenuItem = document.querySelector('.active');
    oldActiveMenuItem.classList.toggle('active');
    newActiveMenuItem.classList.toggle('active');
}

const loadProjects = () => {
    const listOfProjects = projects.projectList;
    const projectList = document.getElementById('project-list');
    let elements = [];

    listOfProjects.forEach(project => {
        const newProject = document.createElement('li');
        newProject.classList.add('sub-item', 'primary-menu-items');
        newProject.innerText = project.title;
        newProject.dataset.projectid = project.id;
        newProject.dataset.display = 'project';
        elements.push(newProject);
    })

    projectList.replaceChildren(...elements);

}

const loadExistingTaskInForm = (id) => {
    
    const taskToUpdate = tasks.getSingleTask(id);

    const title = document.getElementById('task-title');
    const dueDate = document.getElementById('task-due-date');
    const priority = document.getElementById('priority');
    const project = document.getElementById('task-project');
    const description = document.getElementById('task-description');
    const saveBtn = document.getElementById('create-task');

    title.value = taskToUpdate.title;
    dueDate.value = taskToUpdate.dueDate;
    priority.value = taskToUpdate.priority;
    project.value = taskToUpdate.project;
    description.value = taskToUpdate.description;
    saveBtn.dataset.itemid = id;

}

const _formatDate = (date) => {
    const taskDate = new Date(date);
    const baseDate = new Date();


    return formatDistance(baseDate, taskDate, {addSuffix: true});
}


export {
    displayModal,
    closeModal,
    addProjectsToTaskForm,
    clearModal,
    addFormType,
    getFormInputs,
    loadTasks,
    updateCurrentView,
    updateActiveMenuItem,
    loadProjects,
    loadExistingTaskInForm
}