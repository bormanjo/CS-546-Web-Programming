/* A module for running the app processes */


const todoItems = require("./todo");

async function main() {
    
    try {
        // Create a task:
        var newTask1 = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
        // log that task
        console.log("New Task: \n\t", newTask1);
    } catch (error) {
        console.error(error)
    }
    
    try {
        // Create a task:
        var newTask2 = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
        // Log that task
        console.log("New Task: \n\t", newTask2);
    } catch (error) {
        console.error(error)
    }

    try {
         // Query all tasks
        const allTasks = await todoItems.getAllTasks();
        // Log those tasks
        console.log("All Tasks: \n\t",allTasks);
    } catch (error) {
        console.error(error)
    }

    try {
        // Remove the first task
        await todoItems.removeTask(newTask1["_id"])
        // Query all the remaining tasks
        const allTasks1 = await todoItems.getAllTasks();
        // log those tasks
        console.log("Remaining Tasks: \n\t",allTasks1);
    } catch (error) {
        console.error(error)
    }
    
    try {
        // Complete the remaining task
        const completedTask = await todoItems.completeTask(newTask2["_id"]);
        // Log that task
        console.log("Completed Task: \n\t", completedTask);
    } catch (error) {
        console.error(error)
    }

    return;
}

main();