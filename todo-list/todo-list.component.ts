
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { TodoService } from '../todo.services'; // Import TodoService
import { Component, OnInit } from '@angular/core';

// Define the Todo interface
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private todoService: TodoService // Inject TodoService
  ) {}

  ngOnInit(): void {
    this.headerService.changeTitle('Todo App');
    this.todos = this.todoService.getTodos(); // Retrieve todos from the service
  }

  editTodo(index: number) {
    this.router.navigate(['/edit', index]);
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index); // Delete todo using the service
    this.todos = this.todoService.getTodos(); // Refresh the todo list
  }

  completeTask(index: number) {
    const completedTask = this.todos[index];
    completedTask.completed = true;  
    this.todoService.updateTodo(index, completedTask);  
    this.todos = this.todoService.getTodos(); // Refresh the todo list
    this.router.navigate(['/completed']); // Navigate to the completed page
  }
}
