import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { TodoService } from '../todo.services';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo = { title: '', description: '',completed : false};

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private todoService: TodoService // Inject TodoService
  ) {}

  ngOnInit(): void {
    this.headerService.changeTitle('Add Todo');
  }

  addTodo() {
    this.todoService.addTodo(this.todo); // Add the todo using the service
    console.log(this.todo)
    this.router.navigate(['/']); // Navigate back to the main page
  }
}
