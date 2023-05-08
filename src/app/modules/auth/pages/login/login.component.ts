import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '@data/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    
  }

  preview: string = '';

  // save() {
  //   this.preview = JSON.stringify(this.loginForm.value);
  //   console.log(this.preview);
  // }

  login() {
    const usuario = { usuario: this.loginForm.value.usuario , clave: this.loginForm.value.clave };

    this.loginService.login(usuario).subscribe((data) => {
      console.log(data);
    });
  }

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  loginForm = this.fb.group({
    usuario: [''],
    clave: [''],
  })

}
