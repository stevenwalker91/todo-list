import * as tasks from "./tasks";
import * as projects from "./projects";
import "./style.css";
import * as display from "./display";
import * as listeners from "./listeners";

const itemsInStorage = JSON.parse(localStorage.getItem("taskList"));
const projectsInStorage = JSON.parse(localStorage.getItem("projectList"));

// check if items exist in local storage and use them if so
if (itemsInStorage !== null) {
  itemsInStorage.forEach((item) => tasks.tasksList.push(item));

  if (projectsInStorage !== null) {
    projectsInStorage.forEach((item) => projects.projectList.push(item));
  }
}

display.loadTasks();
