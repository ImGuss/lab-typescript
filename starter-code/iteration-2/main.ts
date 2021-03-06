// Add the reference to the "TodoInterface"
import { ToDo } from './todoInterface'

// 1. Create a class Todo that implements the Interface created before.
class Todo implements ToDo {

  // properties
  public tasks: string[] = []

  // constructor
  constructor() {}

  // methods
  addTask(task: string): number {
    this.tasks.push(task)
    return this.tasks.length;
  }
  deleteTask(task: string): number {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1)
      }
    }
    return this.tasks.length;
  }
  listAllTasks(): number {
    console.log('========== ALL TASKS ==========')
    this.tasks.forEach( (oneTask) => {
      console.log(oneTask)
    })
    return this.tasks.length;
  }
}

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
