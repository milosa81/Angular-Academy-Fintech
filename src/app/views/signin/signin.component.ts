import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  hide = true;

  constructor() {}

  ngOnInit(): void {}

  singin(data: any) {
    console.log('signin', data);
  }
}
