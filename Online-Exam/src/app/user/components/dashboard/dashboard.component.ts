import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
// ! take out this service services
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('user'));
    // todo 

  }

}
