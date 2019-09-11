import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entries = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.fetch().subscribe((data: any[])=>{
      console.log(data);
      this.entries = data;
    })  
  }

}
