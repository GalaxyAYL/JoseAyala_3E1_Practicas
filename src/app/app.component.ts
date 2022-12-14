import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router:Router){}
    ngOnInit(): void {
    }
    cmbActividades(){
      this.router.navigate(['actividades'])
    }
    cmbColegios(){
      this.router.navigate(['colegios'])
    }
    cmbGustos(){
      this.router.navigate(['gustos'])
    }
    cmbDeportes(){
      this.router.navigate(['deportes'])
    }
  }
