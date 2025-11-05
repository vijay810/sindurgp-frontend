import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Carousel } from 'bootstrap';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const carouselEl = document.querySelector('#carouselExampleAutoplaying');
      if (carouselEl) {
        new Carousel(carouselEl, {
          interval: 3000, 
          ride: 'carousel', 
          pause: false, 
          wrap: true, 
        });
      }
    }, 500);
  }
}
