import { v4 as uuid4 } from 'uuid';

let projectList = [];

const Project = (title, description, type) => {
    const id = uuid4();
    return {id, title, description, type}
}


const newProject = (title, description, type) => {
    //first check to see if any other projects already exist with name provided and error if so
    const projectsWithTitle = projectList.filter(project => project.title === title);
    if (projectsWithTitle.length !== 0 ) {
        console.log('error this is a duplicate');
        return;
    }

    const newProject = Project(title, description, type);
    projectList.push(newProject);

    //add to localstorage
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

const editProject = (id, title, description, type) => {
    const index = projectList.findIndex(project => project.id == id);
    projectList[index].title = title;
    projectList[index].description = description;
    projectList[index].type = type;

     //add to localstorage
     localStorage.setItem('projectList', JSON.stringify(projectList));
}

const deleteProject = (id) => {
    const index = projectList.findIndex(project => project.id === id);
    projectList.splice(index, 1);

     //add to localstorage
     localStorage.setItem('projectList', JSON.stringify(projectList));
}



export {
    projectList,
    newProject,
    editProject,
    deleteProject

}