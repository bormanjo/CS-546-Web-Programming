const uuidv4 = require('uuid/v4')
const mongoCollections = require("./mongoCollections");
const todoItems = mongoCollections.todoItems;

async function getAllTasks(){
    /* An async function that will resolve to an array of all tasks in the database */

    // Get DB collection
    const taskCollection = await todoItems();

    // Get all tasks
    const tasks = await taskCollection.find({}).toArray();

    // resolve to tasks
    return tasks;
}


async function getTask(id){
    /* an async function that will resolved to the task containing that ID in the database*/

    // if no id -> reject
    if (!id) throw "You must provide an id to search for";
    
    // Get DB collection
    const taskCollection = await todoItems();
    const task = await taskCollection.findOne({ _id: id });
    
    // if task does not exist -> reject
    if (task === null) throw "No dog with that id";
    
    // resolve to task
    return task;  
}


async function createTask(title, description){
    /* An async function that resolves to a newly created to-do list object */

    if (!title) throw "You must provide a name for your dog";

    if (!description) throw "You must provide an array of breeds";

    // Get DB collection
    const taskCollection = await todoItems();

    // Create and set the _id field before inserting the document
    let newTask = {
        _id: uuidv4(),
        title: title,
        description: description,
        completed: false,
        completedAt: null
    }

    // Insert new task
    const insertInfo = await taskCollection.insertOne(newTask);

    // if cannot create task, reject
    if (insertInfo.insertedCount === 0) throw "Could not add task";

    // Get the inserted ID
    const newId = insertInfo.insertedId;

    const task = await this.getTask(newId);
    return task;
}


async function completeTask(taskId){
    /* an async function that will modify the task in the database setting the `completed` field to `true` 
    and `completedAt` to the current time */

    // if no id -> reject
    if (!id) throw "You must provide an id to search for";

    // Get DB Collection
    const taskCollection = await todoItems();

    // Get Task
    let task = await getTask(taskId);

    if(!task) throw " could not find task with the given ID"

    // Update task
    task["completed"] = true;
    task["completedAt"] = Date.now();
    const updateInfo = await taskCollection.updateOne({ _id: id }, task);
    
    // if task cannot be updated -> reject
    if (updatedInfo.modifiedCount === 0) {
      throw "could not update dog successfully";
    }


    // if successful, resolves to the updated task
    return await getTask(id);
}

async function removeTask(id){
    /* An async function that will remove the task from the database */

    // if no id -> reject
    if (!id) throw "You must provide an id to search for";

    // Get DB Collection
    const taskCollection = await todoItems();

    // Get Deletion info
    const deletionInfo = await taskCollection.removeOne({ _id: id });

    // if cannot be removed -> reject
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete task with id of ${id}`;
    }

    // if successful, resolve to true
    return true;
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    completeTask,
    removeTask
}