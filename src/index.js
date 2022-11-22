import { projectList } from './projects.js';
import * as tasks from './tasks.js';
import * as projects from './projects.js';
import * as listeners from './listeners.js';
import './style.css';
import * as display from './display.js';



//all the stuff below is just to ini
const today = new Date();
const fiveMins = new Date(today.setMinutes(today.getMinutes() + 5));
const tomorrow = new Date(today.setHours(today.getHours() + 24));
const expired = new Date(today.setHours(today.getHours() - 200));
const months = new Date(today.setMonth(today.getMonth()+6));


//stuff below for testing functions
tasks.newTask('Get down to the shops', fiveMins, 'high', 'High', 'Need to get stuff for dinner. Make sure to also include milk and coffee');
tasks.newTask('Fix the bug with dates rendering in to-do app', tomorrow, 'low', 'low', 'Which one? Probably best to fix them all.');
tasks.newTask('Add in ability to actually update a task to complete', expired, 'medium', 'high', 'Need to update the model and also apply a css class so they visually look done');
tasks.newTask('Bake a birthday cake', months, 'medium', 'high', 'Dont worry, its a while off yet');


projects.newProject('Personal', 'other stuff', 'default')
projects.newProject('Work', 'other stuff', 'default')

//dynamically generated takss will have a project which is defined by the UUID - bodge this for the demo
tasks.tasksList[0].project = projects.projectList[0].id;
tasks.tasksList[2].completed = true;


display.loadTasks();
//display.loadProjects();

//displayModal();