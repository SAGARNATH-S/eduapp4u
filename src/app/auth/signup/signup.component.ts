import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUp:any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.signUp = this.formBuilder.group({
      'first_name' : [null, Validators.required],
      'last_name' : [null, Validators.required],
      'username' : [null, Validators.required],
      'phone' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }
  
  onFormSubmit(form: NgForm) {
    this.authService.signup(form).subscribe((res: string | any[]) =>{
      if(res){
        console.log("Login Sucessful");
      }
    })
  }

}
