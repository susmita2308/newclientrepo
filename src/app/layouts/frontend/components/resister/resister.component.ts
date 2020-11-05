import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
 

  regForm : FormGroup;
  constructor(private fb:FormBuilder) { }

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
    });
  }
}
