import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onclick()
  {
  this.router.navigate(["/home"])
  }

}
