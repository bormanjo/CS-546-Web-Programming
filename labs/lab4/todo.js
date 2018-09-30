const uuidv4 = require('uuid/v4')


async function createTask(title, description){
    /* An async function that resolves to a newly created to-do list object */

    // Create and set the _id field before inserting the document

    task = {
        _id: uuidv4(),
        title: title,
        description: description,
        completed: false,
        completedAt: null
    }

    // if cannot create task, reject
}


async function getAllTasks(){
    /* An async function that will resolve to an array of all tasks in the database */

}


async function getTask(id){
    /* an async function that will resolved to the task containing that ID in the database*/

    // if no id -> reject

    // if task does not exist -> reject
}


async function completeTask(taskId){
    /* an async function that will modify the task in the database setting the `completed` field to `true` 
    and `completedAt` to the current time */

    // if no id -> reject

    // if task cannot be updated -> reject

    // if successful, resolves to the updated task
    console.log(Date.now())
}

async function removeTask(id){
    /* An async function that will remove the task from the database */

    // if no id -> reject

    // if cannot be removed -> reject

    // if successful, resolve to true
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}