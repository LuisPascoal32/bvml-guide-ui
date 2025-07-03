import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from './models/sidenav.model';
import { NavigationService } from './services/navigation/navigation.service';

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
    MatIcon
  ],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSmallScreen = false;

  navItems: NavItem[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private navigationService: NavigationService,
    public router: Router
  ) {
    this.navItems = this.navigationService.getNavItems();
  }

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

  getFullRoute(group: any, child?: any): string {
    return child ? `/${group.route}/${child.route}` : `/${group.route}`;
  }
}
