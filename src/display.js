import * as projects from './projects.js';

const modal = document.getElementById('taskModal');

const displayModal = () => {
    modal.style.display = 'flex';
    addProjectsToTaskForm();
}

const closeModal = () => {
    modal.style.display = 'none';
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
        element.value = project.title;
        element.innerText = project.title;
        elements.push(element);
    })

    //replaceChildren function will remove any options already there and add all from fresh
    //removes the need to compare what's there to prevent duplication
    projectDropdown.replaceChildren(...elements);
}



export {
    displayModal,
    closeModal,
    addProjectsToTaskForm
}