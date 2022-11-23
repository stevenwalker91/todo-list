import { v4 as uuidv4 } from 'uuid';
import { isToday, isPast, isThisWeek } from 'date-fns';

const tasksList = [];

// factory function for creating neew tasks
const Task = (title, description, dueDate, priority, project) => {
  const id = uuidv4();
  const completed = false;
  return {
    id, title, description, dueDate, priority, project, completed,
  };
};

// function to call factory to create the tasks
const newTask = (title, dueDate, priority, project, description) => {
  const task = Task(title, description, dueDate, priority, project);
  tasksList.push(task);

  // send the tasks to local storage
  localStorage.setItem('taskList', JSON.stringify(tasksList));
};

const editTask = (id, title, dueDate, priority, project, description) => {
  const index = tasksList.findIndex((task) => task.id === id);
  tasksList[index].title = title;
  tasksList[index].description = description;
  tasksList[index].dueDate = dueDate;
  tasksList[index].priority = priority;
  tasksList[index].project = project;

  // send the tasks to local storage
  localStorage.setItem('taskList', JSON.stringify(tasksList));
};

const updateTaskStatus = (id, complete) => {
  const index = tasksList.findIndex((task) => task.id === id);
  tasksList[index].completed = complete;

  // send the tasks to local storage
  localStorage.setItem('taskList', JSON.stringify(tasksList));
};

const deleteTask = (id) => {
  const index = tasksList.findIndex((task) => task.id === id);
  tasksList.splice(index, 1);

  // send the tasks to local storage
  localStorage.setItem('taskList', JSON.stringify(tasksList));
};

// function to retrieve tasks which takes a filter - defaults on all tasks if filter not provided
// accepted values are "today" or "project" - when providing project the actual project id should also be provided
// if creating a new menu item, it should be given a data-display which matches the filter string below
const getTasks = (filter, project) => {
  const sortByUncompleted = (a) => {
    if (a.completed === true) {
      return 1;
    }
    return -1;
  };

  if (filter === 'today') {
    return tasksList.filter((task) => isToday(new Date(task.dueDate))).sort(sortByUncompleted);
  }

  if (filter === 'project') {
    return tasksList.filter((task) => task.project === project).sort(sortByUncompleted);
  }

  if (filter === 'important') {
    return tasksList.filter((task) => task.priority === 'high').sort(sortByUncompleted);
  }

  if (filter === 'expired') {
    return tasksList.filter((task) => isPast(new Date(task.dueDate))).sort(sortByUncompleted);
  }

  if (filter === 'week') {
    return tasksList.filter((task) => isThisWeek(new Date(task.dueDate))).sort(sortByUncompleted);
  }

  return tasksList.sort(sortByUncompleted);
};

const getSingleTask = (id) => {
  const taskToReturn = tasksList.filter((task) => task.id === id);
  return taskToReturn[0];
};

export {
  tasksList,
  newTask,
  editTask,
  deleteTask,
  getTasks,
  getSingleTask,
  updateTaskStatus,
};
