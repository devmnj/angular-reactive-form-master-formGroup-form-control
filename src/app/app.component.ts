import { Component } from '@angular/core';
import { Todo } from './todo';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      {{todoForm.value | json}}<br/>
      <button class="btn btn-primary" (click)="predefValue()">Fill default</button>
      <div class="container">
      <div class="aletr alert-danger" *ngIf="errorMsg">
      {{errorMsg}}
      </div>
      <form [formGroup]="todoForm"   novalidation (ngSubmit)="OnSubmit()"  >
       
      <div class="form-group">
      <label>Title</label>
      <input type="text"  required   class="form-control" formControlName="item">

      </div>
      <div class="form-group ">
      <label>Description</label>
      <textarea class="form-control" minlength="10" formControlName="description" ></textarea>
      </div>
       <button  type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'todo-form-master';
  todoForm = new FormGroup({
    item: new FormControl('MDT'),
    description: new FormControl('')
  });
  public submitted = false;
  todoModel = new Todo('New todo', 'some text');
  constructor(private _todoService: TodoService) { }
  errorMsg = '';

  OnSubmit(): void {
    this.submitted = true;
    console.log(this.todoModel);
    // tslint:disable-next-line: max-line-length
    this._todoService.todoPost(this.todoModel).subscribe((data: any) => console.log('Success', data), (error: any) => this.errorMsg = error.statusText);
  }
  // setValue
  // patchValue
  predefValue(): void {
    this.todoForm.patchValue({ item: 'MDF form' });
  }

}
