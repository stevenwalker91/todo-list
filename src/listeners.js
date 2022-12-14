import * as display from "./display";
import * as tasks from "./tasks";

window.addEventListener("load", () => {
  display.loadProjects();

  const primaryMenuItems = document.querySelectorAll(".primary-menu-items");
  primaryMenuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      // we need to account for target potentially being a subitem in which case we should get the parent element which holds data attributes
      let target;
      if (event.target.nodeName !== "LI") {
        target = event.target.parentElement;
      } else {
        target = event.target;
      }

      display.updateCurrentView(target.dataset.display);
      // check if clicked item has a project ID, in which case pass it to the load tasks function
      if (target.dataset.projectid) {
        display.loadTasks(target.dataset.projectid);
      } else {
        display.loadTasks();
      }

      display.updateActiveMenuItem(item);
      display.updatePageHeader(target.dataset.header);

      // check if mobile view is on and if so, update the UI when an option is selected
      const menuOptions = document.getElementById("sidebar");
      if (menuOptions.classList.contains("mobile-nav")) {
        display.handleMobileMenu();
      }
    });
  });
});

// first add any keyboard shortcuts we want to use across the UI
document.addEventListener("keydown", (event) => {
  const enteredChar = event.key;

  // this is for allowing the user to create a new project hwen hitting enter
  if (event.target.id === "projectNameInput") {
    switch (enteredChar) {
      case "Escape":
        display.displayNewProjectDialog();
        break;
      case "Enter":
        display.displayNewProjectDialog();
        display.createNewProject();
        break;
      default:
        break;
    }
  }

  // if the user is typing in an input field, stop the function
  if (event.target.tagName === "INPUT" && enteredChar !== "Escape") {
    return;
  }
  switch (enteredChar) {
    case "Escape":
      display.closeModal();
      break;
    case "n":
      display.displayModal();
      break;
    case "+":
      display.displayModal();
      break;
    default:
      break;
  }
});

// listen for users clicking to add a new task and present them the modal
const newTaskBtn = document.getElementById("new-task");
newTaskBtn.addEventListener("click", () => {
  display.addFormType("new");
  display.addProjectsToTaskForm();
  display.displayModal();
});

// listen for users closing the modal (they can also use keyboard shortcut)
const closeModalBtn = document.getElementById("closeModal");
closeModalBtn.addEventListener("click", display.closeModal);

const cancelBtn = document.getElementById("cancel-task");
cancelBtn.addEventListener("click", () => {
  display.closeModal();
  display.clearModal();
});

// process new task submission ans reload the UI with tasks
const form = document.getElementById("task-submission");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formInputs = display.getFormInputs();

  if (form.dataset.formtype === "new") {
    // spread operator means i can just through all the inputs in a oner
    tasks.newTask(...formInputs);
  } else if (form.dataset.formtype === "edit") {
    // add the id into the form inputs
    const id = document.getElementById("create-task").dataset.itemid;
    formInputs.unshift(id);
    tasks.editTask(...formInputs);
  }

  display.loadTasks();

  // now clear down the form
  display.closeModal();
  display.clearModal();
});

const accordionBtn = document.getElementById("accordion-header");
accordionBtn.addEventListener("click", display.handleAccordion);

// when clicking new project, show the dialog
const newProjectBtn = document.getElementById("add-project");
newProjectBtn.addEventListener("click", display.displayNewProjectDialog);

// when clicking cancel, hide the dialog
const cancelProjectBtn = document.getElementById("cancel-project");
cancelProjectBtn.addEventListener("click", display.displayNewProjectDialog);

// when clicking confirm, create new project
const confirmNewProject = document.getElementById("submitProject");
confirmNewProject.addEventListener("click", () => {
  display.displayNewProjectDialog();
  display.createNewProject();
});

const menuBtn = document.getElementById("menu-icon");
menuBtn.addEventListener("click", () => {
  display.handleMobileMenu();
});
// edit, delete and info add event listener is done in display.js when the ui component is created
