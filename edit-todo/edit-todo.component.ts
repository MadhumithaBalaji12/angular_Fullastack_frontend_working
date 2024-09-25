import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { TodoService } from '../todo.services';
@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss'
})
export class EditTodoComponent implements OnInit {

todo={title:'',description:'',completed : false};

constructor(private route:ActivatedRoute,
  private router:Router,
  private headerService:HeaderService,
private todoservice : TodoService){}

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (id !== null) {
    const index = parseInt(id, 10);
    this.todo = { ...this.todoservice.getTodos()[index] }; // Populate the todo with existing values
  }
  this.headerService.changeTitle('Edit Todo');
}

editTodo() {
   const id = this.route.snapshot.paramMap.get('id');
   if (id !== null) {
     const index = parseInt(id, 10);
     this.todoservice.updateTodo(index, this.todo);
   }
   this.router.navigate(['/']); 
 }
// editTodo() {
//   const id = this.route.snapshot.paramMap.get('id');
//   if (id !== null) {
//     const index = parseInt(id, 10);
//     this.todoservice.updateTodo(index, this.todo); // Update the todo in the service
//   }
//   this.router.navigate(['/']); // Navigate back to the main page
// }

}


