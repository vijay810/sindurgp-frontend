import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit() {}
}
