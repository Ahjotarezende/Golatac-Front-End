import { Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  viewNavBar: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        e.url !== '/login'
          ? (this.viewNavBar = true)
          : (this.viewNavBar = false);
      }
    });
  }
}
