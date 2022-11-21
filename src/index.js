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
tasks.newTask('do stuff', fiveMins, 'high', 'High', 'default');
tasks.newTask('do other stuff', tomorrow, 'low', 'high', 'default');
tasks.newTask('an old tsk that needs done', expired, 'medium', 'high', 'default');
tasks.newTask('it\'s my birthday, bake a cake', months, 'medium', 'high', 'default');


projects.newProject('Work', 'other stuff', 'default')
projects.newProject('Personal', 'other stuff', 'default')

//dynamically generated takss will have a project which is defined by the UUID - bodge this for the demo
tasks.tasksList[0].project = projects.projectList[0].id;


display.loadTasks();
//display.loadProjects();

//displayModal();