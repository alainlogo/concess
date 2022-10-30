import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // importer le module
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.router.navigate(['/admin', 'dashboard'])
  }

}
