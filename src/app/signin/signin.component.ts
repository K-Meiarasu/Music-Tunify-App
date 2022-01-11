import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicserviceService } from '../musicservice.service'; 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form!: FormGroup;
  users:any={};
  string:any='';
  constructor(private fb: FormBuilder,private router: Router, private service:MusicserviceService) { }

  ngOnInit(): void {
    this.users=JSON.parse(localStorage.getItem('data')|| '{}');

    if(Object.keys(this.users).length === 0)
    {
      this.service.getusers().subscribe(users=> {
        this.users=users;
      })
    }
    
    this.form=this.fb.group({
      name:['',Validators.required],
      password:['']
    })
    
  }

  check()
  {
    console.log(this.users);
    for(let i=0;i<this.users.length;i++)
    {
      if(this.form.value.name==this.users[i].name && this.form.value.password==this.users[i].password)
      {
        this.service.auth(true);
        this.router.navigateByUrl("/home");
      }
    }
    this.string="Login credentials failed.. Try Again"
    
  }
  signup()
  {
    this.router.navigateByUrl("/signup");
  }

}
