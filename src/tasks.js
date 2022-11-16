import { v4 as uuidv4 } from 'uuid';

let tasksList = [];

//factory function for creating neew tasks
const Task = (title, description, dueDate, priority, project) => {
    const id = uuidv4();
    const completed = false;
    return {id, title, description, dueDate, priority, project, completed};
}

//function to call factory to create the tasks
const newTask = (title, description, dueDate, priority, project) => {
    const newTask = Task(title, description, dueDate, priority, project);
    tasksList.push(newTask);
}

const editTask = (id, title, description, dueDate, priority, project) => {
    const index = tasksList.findIndex(task => task.id == id);
    tasksList[index].title = title;
    tasksList[index].description = description;
    tasksList[index].dueDate = dueDate;
    tasksList[index].priority = priority;
    tasksList[index].project = project;

}

const deleteTask = (id) => {
    const index = tasksList.findIndex(task => task.id == id);
    tasksList.splice(index, 1);
}

export {
    tasksList,
    newTask,
    editTask,
    deleteTask
}