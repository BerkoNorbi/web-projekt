import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../shared/models/user.model';
import { Group } from '../../shared/models/group.model';
import { FbBaseService } from 'src/app/services/fb-base.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  error = false;
  

  user: User ={
    id: 's',
    email: 'string',
    name: 'string'
}



  constructor(private router: Router,private authService: AuthService,private service: FbBaseService<User>) { }


  registration(): void {
    this.error = false;
    if (this.form.valid) {
      if (this.form.value.password1 === this.form.value.password2) {
        this.authService.register(this.form.value.email, this.form.value.password1),
          
          this.user.email = this.form.value.email;
          this.user.name = this.form.value.username;
          this.service.add('User', this.user)
        }



        this.router.navigateByUrl('/login');
        return;
      
    }
    this.error = true;
  }
}
