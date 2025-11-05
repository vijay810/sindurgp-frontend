import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layoutpage',
  standalone: true,
  imports: [IonContent, RouterOutlet, HeaderComponent, FooterComponent],

  templateUrl: './layoutpage.component.html',
  styleUrls: ['./layoutpage.component.scss'],
})
export class LayoutpageComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  showScrollButton = false;

  constructor() {}

  ngOnInit() {}

  // Detect scroll
  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    this.showScrollButton = scrollTop > 10;
  }

  // Scroll to top smoothly
  async scrollToTop() {
    await this.content.scrollToTop(500); // 500ms smooth scroll
  }
}
