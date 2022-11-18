import { projectList } from './projects.js';
import * as tasks from './tasks.js';
import * as projects from './projects.js';
import * as listeners from './listeners.js';
import './style.css';
import * as display from './display.js';


//stuff below for testing functions
tasks.newTask('do stuff', '3rd june', 'high', 'High', 'default');
tasks.newTask('do other stuff', '12th march', 'low', 'high', 'default');
tasks.newTask('it\'s my birthday, bake a cake', '3rd july', 'medium', 'high', 'default');


projects.newProject('Project 1', 'other stuff', 'default')
projects.newProject('Project 2', 'other stuff', 'default')


display.loadTasks();
//display.loadProjects();

//displayModal();