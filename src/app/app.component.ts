import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Friends', url: '/folder/pages/friends/friends', icon: 'people' },
    { title: 'Travel', url: './pages/travel', icon: 'train' },

  ];

  constructor() {}
}
