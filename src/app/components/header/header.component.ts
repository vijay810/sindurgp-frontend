import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [NgClass],
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  openSubmenuIndex: number | null = null; 
  lockedSubmenuIndex: number | null = null;

  constructor() {}
  ngOnInit(): void {}

 
  openSubmenu(index: number): void {
    if (this.lockedSubmenuIndex === null) {
      this.openSubmenuIndex = index;
    }
  }

  closeSubmenu(): void {
    if (this.lockedSubmenuIndex === null) {
      this.openSubmenuIndex = null;
    }
  }

  toggleSubmenu(event: Event, index: number): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.lockedSubmenuIndex === index) {
      this.lockedSubmenuIndex = null;
      this.openSubmenuIndex = null;
    } else {
      this.lockedSubmenuIndex = index;
      this.openSubmenuIndex = index;
    }
  }
}



