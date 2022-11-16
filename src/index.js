import { projectList } from './projects.js';
import * as tasks from './tasks.js';
import * as projects from './projects.js';
import './style.css';


//stuff below for testing functions
tasks.newTask('do stuff', 'some more infrmation', 'tomorrow', 'high', 'default');
tasks.newTask('do other stuff', 'some more infrmation', 'tomorrow', 'high', 'default');
//console log contains eference to object so to view what it showed at specific poit in time, stringify
console.log(JSON.parse(JSON.stringify(tasks.tasksList)));

let uid = tasks.tasksList[0].id;

tasks.editTask(uid, 'ive been updated', 'some more infrmation', 'tomorrow', 'high', 'default');
console.log(JSON.parse(JSON.stringify(tasks.tasksList)));

tasks.deleteTask(uid);
console.log(JSON.parse(JSON.stringify(tasks.tasksList)));

console.log(tasks.getTasks());
console.log(tasks.getTasks('today'));

projects.newProject('test', 'other stuff', 'default')
projects.newProject('test', 'other stuff', 'default')



function displayModal(){
    const modal = document.getElementById('taskModal');
 
}

//displayModal();