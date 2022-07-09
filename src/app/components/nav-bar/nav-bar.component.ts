import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isMenuOpen: boolean = true;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  navigate(): void {
    this.isMenuOpen = true;
  }

}
