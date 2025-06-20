import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { IMAGE_GROUPS } from './image-gallery/image.service';

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
    MatExpansionModule,
    LayoutModule,
    CommonModule,
    RouterModule,
  ],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;

  navItems = IMAGE_GROUPS.map((group) => ({
    label: group.label,
    route: group.children ? undefined : `/${group.route}`,
    expanded: group.expanded,
    children: group.children?.map((child) => ({
      label: child.label,
      route: `/${group.route}/${child.route}`,
    })),
  }));

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
        this.isSmallScreen ? this.sidenav?.close() : this.sidenav?.open();
      });
  }

  toggleSidebar(): void {
    this.sidenav.toggle();
  }
}
