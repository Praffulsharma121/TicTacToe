import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TicTacToe';

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

  hasRoute(route: string) {
    console.log(this.router.url.includes(route));
    return this.router.url.includes(route);
  }
}
