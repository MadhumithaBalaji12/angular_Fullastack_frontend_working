import { Injectable } from '@angular/core';
// Define the Todo interface
export interface Todo {
  title: string;
  description: string;
  completed: boolean; 
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = []; 

  constructor() {
    this.loadTodos(); // Load todos from local storage when service is instantiated
  }

  private loadTodos() {
    const storedTodos = localStorage.getItem('todos'); // Get todos from local storage
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos); // Parse the stored JSON string into an array
    }
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos)); // Save todos to local storage
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.saveTodos(); // Save todos after adding a new one
  }

  updateTodo(index: number, updatedTodo: Todo): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo; 
      this.saveTodos(); // Save todos after updating
    }
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
    this.saveTodos(); // Save todos after deletion
  }

  completeTodo(index: number): void {
    const completedTask = this.todos[index];
    completedTask.completed = true;
    this.saveTodos(); // Save updated todos after marking as complete
  }

  // New method to get completed todos
  getCompletedTodos(): Todo[] {
    return this.todos.filter(todo => todo.completed); // Return only completed todos
  }
}
