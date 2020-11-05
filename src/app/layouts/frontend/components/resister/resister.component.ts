import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterPreloader } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
 

  regForm : FormGroup;
  constructor(private fb:FormBuilder , private securityService:SecurityService ,  private router: Router) { }

  ngOnInit(): void {
  }
  private createForm() {
    this.regForm = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(45),
          Validators.pattern(/a-zA-Z/),
        ]),
      ],
      mobile: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/[0-9]{10}/),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      address: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(45),
          Validators.pattern(/a-zA-Z/),
        ]),
      ],
    });
  }

register() {
  this.securityService.register(this.regForm.value).subscribe(
    (response) => {
      Swal.fire('registration is succesful', 'you can log in', 'success');
     
    },
    (err) => {
      Swal.fire('registration is not succesful', "you can't log in", 'error');
    }
  );
}

}