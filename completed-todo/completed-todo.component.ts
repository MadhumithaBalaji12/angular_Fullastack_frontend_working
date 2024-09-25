import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header.service';
import { TodoService, Todo } from '../todo.services'; // Import TodoService and Todo interface

@Component({
  selector: 'app-completed-todo',
  templateUrl: './completed-todo.component.html',
  styleUrls: ['./completed-todo.component.scss'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class CompletedTodoComponent implements OnInit {
  completedTodos: Todo[] = []; // Initialize as an empty array

  constructor(private headerService: HeaderService, private todoService: TodoService) {}

  ngOnInit(): void {
    this.headerService.changeTitle('Completed Todos');
    this.completedTodos = this.todoService.getCompletedTodos(); // Fetch completed todos from the service
  }
}

