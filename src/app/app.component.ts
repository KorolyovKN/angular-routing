import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <h1>Routing in Angular</h1>
    <router-outlet></router-outlet>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
