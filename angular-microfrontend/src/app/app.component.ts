import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-microfrontend';
  user = {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
  };
}
