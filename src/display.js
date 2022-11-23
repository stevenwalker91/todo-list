import { formatDistance, parseISO } from 'date-fns';
import * as projects from './projects';
import * as tasks from './tasks';

//  we'll maintain a variable that shows the current view so we can retrieve
//  the relevant tasks
let currentView = 'inbox';

//  some global variables that will be used by multiple functions
const modal = document.getElementById('taskModal');
const form = document.getElementById('task-submission');
const formElements = form.querySelectorAll('input, select, textarea');

const displayModal = () => {
  modal.style.display = 'flex';
};

const closeModal = () => {
  modal.style.display = 'none';
};

//  clear down the modal forms for if its submitted or user explicitly cancels
const clearModal = () => {
  formElements.forEach((element) => {
    element.value = '';
  });
};

const addProjectsToTaskForm = () => {
  const projectDropdown = document.getElementById('task-project');
  const listOfProjects = projects.projectList;
  const elements = [];
  // add a blank value to the list so user doesn't have to select a project
  const blankElement = document.createElement('option');
  elements.push(blankElement);

  // iterate over the list of projects adding each as an option for the dropdown
  listOfProjects.forEach((project) => {
    const element = document.createElement('option');
    element.value = project.id;
    element.innerText = project.title;
    elements.push(element);
  });

  // replaceChildren function will remove any options already there and add all from fresh
  // removes the need to compare what's there to prevent duplication
  projectDropdown.replaceChildren(...elements);
};

// iterate through the elements in the form and add values to an array which is returned
const getFormInputs = () => {
  const formInputs = [];
  formElements.forEach((element) => formInputs.push(element.value));
  return formInputs;
};

// add data attribute to form to determine whether it's editing or creating a new task
const addFormType = (updateType) => {
  form.dataset.formtype = updateType;
};

const updatePageHeader = (headerText) => {
  const headerElement = document.getElementById('page-header');
  headerElement.innerText = headerText;
};

const formatDate = (date) => {
  const taskDate = new Date(date);
  const baseDate = new Date();
  return formatDistance(taskDate, baseDate, { addSuffix: true });
};

const handleAccordion = () => {
  const listProjects = document.getElementById('project-list');
  const accordionHeader = document.getElementById('accordion-header');

  const icon = document.getElementById('expand-icon');

  if (accordionHeader.classList.contains('opened')) {
    icon.innerText = 'chevron_right';
  } else {
    icon.innerText = 'expand_more';
  }
  listProjects.classList.toggle('hide-accordion');
  accordionHeader.classList.toggle('opened');
};

const displayNewProjectDialog = () => {
  const newProjectBtn = document.getElementById('add-project');
  const newProjectDialog = document.getElementById('new-project');

  newProjectBtn.classList.toggle('hide-btn');
  newProjectDialog.classList.toggle('show-dialog');
};

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
};


// function to load tasks to the UI
const loadTasks = (project) => {
  const taskContainer = document.getElementById('tasks-container');
  const listOfTasks = tasks.getTasks(currentView, project);

  const elements = [];

  // build up the html
  listOfTasks.forEach((task) => {
    // take title
    const taskElement = document.createElement('div');
    taskElement.classList = 'task';
    if (task.priority === 'high') {
      taskElement.classList += ' priority';
    }
    if (task.priority === 'low') {
      taskElement.classList += ' low-priority';
    }

    const taskTitle = document.createElement('div');
    taskTitle.classList = 'task-title';
    taskElement.appendChild(taskTitle);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    taskTitle.appendChild(checkBox);

    // check status of task and add appropriate styling if complete
    if (task.completed === true) {
      taskElement.classList.toggle('completed');
      checkBox.checked = true;
    }

    // add an event listener so it can later be updated
    checkBox.addEventListener('change', (event) => {
      if (event.target.checked) {
        tasks.updateTaskStatus(task.id, true);
      } else {
        tasks.updateTaskStatus(task.id, false);
      }

      taskElement.classList.toggle('completed');
      // toggle the complete class
    });

    const title = document.createElement('p');
    title.innerText = task.title;
    title.classList = 'task-text';
    taskTitle.appendChild(title);

    // task controls

    const controlsContainer = document.createElement('div');
    controlsContainer.classList = 'task-controls';
    taskElement.appendChild(controlsContainer);

    const dateContainer = document.createElement('span');
    dateContainer.classList = 'due-date';
    if (task.dueDate === '') {
      dateContainer.innerText = 'No due date';
    } else {
      dateContainer.innerText = `due ${formatDate(task.dueDate)}`;
    }
    dateContainer.setAttribute('title', parseISO(task.dueDate));

    controlsContainer.appendChild(dateContainer);

    const infoBtn = document.createElement('span');
    const toolTip = document.createElement('span');
    toolTip.innerText = task.description;
    toolTip.classList.add('tooltiptext');
    infoBtn.classList = 'material-symbols-outlined icon-btn task-info';
    infoBtn.innerHTML = 'info';
    infoBtn.dataset.itemid = task.id;
    infoBtn.appendChild(toolTip);
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
    });

    const deleteBtn = document.createElement('span');
    deleteBtn.classList = 'material-symbols-outlined icon-btn delete-task';
    deleteBtn.innerHTML = 'delete';
    deleteBtn.dataset.itemid = task.id;
    controlsContainer.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (event) => {
      if (window.confirm(`Are you sure you want to delete this task? \n\n ${task.title}`)) {
        tasks.deleteTask(event.target.dataset.itemid);
        loadTasks();
      }
    });

    elements.push(taskElement);
  });

  taskContainer.replaceChildren(...elements);
};

const updateCurrentView = (view) => {
  currentView = view;
};

const updateActiveMenuItem = (newActiveMenuItem) => {
  const oldActiveMenuItem = document.querySelector('.active');
  if (oldActiveMenuItem) {
    oldActiveMenuItem.classList.toggle('active');
  }

  newActiveMenuItem.classList.toggle('active');
};

const loadProjects = () => {
  const listOfProjects = projects.projectList;
  const projectList = document.getElementById('project-list');
  const elements = [];

  listOfProjects.forEach((project) => {
    const newProject = document.createElement('li');
    newProject.classList.add('sub-item', 'primary-menu-items', 'menu-items');
    newProject.dataset.projectid = project.id;
    newProject.dataset.display = 'project';
    newProject.dataset.header = project.title;

    newProject.addEventListener('click', (event) => {
      // we need to account for target potentially being a subitem in which case
      // we should get the parent element which holds data attributes
      let target;
      if (event.target.nodeName !== 'LI') {
        target = event.target.parentElement;
      } else {
        target = event.target;
      }

      updateCurrentView(target.dataset.display);
      // check if clicked item has a project ID, in which case pass it to the load tasks
      // function
      if (target.dataset.projectid) {
        loadTasks(target.dataset.projectid);
      } else {
        loadTasks();
      }

      updateActiveMenuItem(newProject);
      updatePageHeader(target.dataset.header);
    });

    const titleSpan = document.createElement('span');
    titleSpan.innerText = project.title;

    const crossSpan = document.createElement('span');
    crossSpan.classList = 'material-symbols-outlined delete-project icon-btn';
    crossSpan.innerText = 'close';
    newProject.appendChild(titleSpan);
    newProject.appendChild(crossSpan);

    crossSpan.addEventListener('click', (event) => {
      event.stopPropagation();

      projects.deleteProject(event.target.parentElement.dataset.projectid);

      updateCurrentView('inbox');
      loadTasks();
      updateActiveMenuItem(document.getElementById('inbox'));
      updatePageHeader('Inbox');
      loadProjects();
    });

    elements.push(newProject);
  });

  projectList.replaceChildren(...elements);
};

const createNewProject = () => {
  const inputProject = document.getElementById('projectNameInput');
  projects.newProject(inputProject.value);
  loadProjects();
  inputProject.value = '';
};

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
  loadExistingTaskInForm,
  updatePageHeader,
  handleAccordion,
  displayNewProjectDialog,
  createNewProject,
};
