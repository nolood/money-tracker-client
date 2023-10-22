import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/modules/user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '.timemanagement';

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getSelf();
  }
}
