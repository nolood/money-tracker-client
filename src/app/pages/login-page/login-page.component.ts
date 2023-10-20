import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  peepsHappyPath = '../../../assets/peeps/peeps-happy.png';
  peepsSadPath = '../../../assets/peeps/peeps-sad.png';
}
