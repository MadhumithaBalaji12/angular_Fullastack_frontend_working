import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CompletedTodoComponent } from './completed-todo/completed-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';
const routes:Routes=[

  {path:'',component:TodoListComponent},
  {path:'add',component:AddTodoComponent},
  {path:'edit/:id',component:EditTodoComponent},
  {path:'completed',component:CompletedTodoComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    CompletedTodoComponent,
    EditTodoComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
