import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 9 Reactive-form and Validation';
  regForm:FormGroup;
  submitted = false;
  public newData:any;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.regForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get formData(){ return this.regForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.regForm.invalid){
      return;
    }
  alert(JSON.stringify(this.regForm.value));
    
  }
}
