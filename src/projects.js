import { v4 as uuid4 } from 'uuid';

let projectList = [];

const Project = (title, description, type) => {
    const id = uuid4();
    return {id, title, description, type}
}


const newProject = (title, description, type) => {
    const projectsWithTitle = projectList.filter(project => project.title === title);
    if (projectsWithTitle.length !== 0 ) {
        console.log('error this is a duplicate');
        return;
    }

    console.log('success');

    const newProject = Project(title, description, type);
    projectList.push(newProject);
}

const editProject = (id, title, description, type) => {
    const index = projectList.findIndex(project => project.id == id);
    projectList[index].title = title;
    projectList[index].description = description;
    projectList[index].type = type;
}

const deleteProject = (id) => {
    const index = projectList.findIndex(project => project.id === id);
    projectList.splice(index, 1);
}

export {
    projectList,
    newProject,
    editProject,
    deleteProject

}