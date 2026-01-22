import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  isDark:boolean = false;
  constructor()
  {

  }
  userForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    subject:new FormControl('',Validators.required)
  })

 submit()
 {
  Swal.fire({
    title: "Hurray!",
    text: "Form has been submitted!",
    icon: "success"
  }); 
  console.log(this.userForm.value);
  this.userForm.setValue({
    name: '',
    email: null,
    subject: null
  }
    
  )

 }

}
