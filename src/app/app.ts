import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    LayoutModule,
    CommonModule,
    RouterModule
  ]
})
export class AppComponent {
@ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;

  
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
      if (this.isSmallScreen) {
        this.sidenav?.close();
      } else {
        this.sidenav?.open();
      }
    });
  }

  toggleSidebar(): void {
    this.sidenav.toggle();
  }
}