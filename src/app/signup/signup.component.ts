import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MusicserviceService } from '../musicservice.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form!:FormGroup
  name:any='';
  email:any='';
  password:any='';
  cp:any='';
  username:any='';
  mail:any='';
  pwd:any='';
  users:any=[];
  constructor(private fb: FormBuilder, private service:MusicserviceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getusers().subscribe(users=> {
      this.users=users;
    })
    
    this.form=this.fb.group({
      name:['',Validators.required],
      email:[''],
      password:[''],
      cpassword:['']
    })
  }

  check()
  {
    this.name='';
    this.email='';
    this.password='';
    this.cp='';
    if(this.form.value.name=='')
    {
      this.name="Name not accepted";
    }
    if(this.form.value.email=='')
    {
      this.email="Provide valid email ID";
    }
    if(this.form.value.password=='')
    {
      this.password="Password not accepted";
    }
    if(this.form.value.cpassword=='')
    {
      this.cp="Password not accepted";
    }
    if(this.form.value.password!=this.form.value.cpassword)
    {
      this.cp="Password not matching"
    }
    if(this.name=='' && this.email=='' && this.password=='' && this.cp=='')
    {
      var add=false;
      for(let i=0;i<this.users.length;i++)
      {
        if(this.username==this.users[i].name)
        {
          add=true;
        }
      }
      if(!add)
      {
        var store={
          name :this.username,
          email :this.mail,
          password :this.pwd
        }
        this.users.push(store);
      }
      localStorage.setItem('data',JSON.stringify(this.users));
      this.router.navigateByUrl("/login");
    }
  }
}