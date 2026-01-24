import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  isDark:boolean = false;
  constructor()
  {

  }
  userForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email]),
    subject:new FormControl('',[Validators.required])
  })

 submit()
 {
 if(this.userForm.valid)
 {
  const name = this.userForm.value.name;
  const email = this.userForm.value.email;
  const message = this.userForm.value.subject;
  const subject = `Portfolio Contact From ${name}`;
  const body = `
${message}
  `;
  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=raeshalkhurana07@gmail.com` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, '_blank');

 }
this.userForm.reset();

 }

}
