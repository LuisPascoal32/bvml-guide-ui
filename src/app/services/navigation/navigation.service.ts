import { Injectable } from "@angular/core";
import { NAV_ITEMS, NavItem } from "../../models/sidenav.model";

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private navItems: NavItem[] = NAV_ITEMS;

  getNavItems(): NavItem[] {
    return this.navItems;
  }

  getNavLabelByRoute(section: string, subSection?: string): string | undefined {
    const sectionItem = this.navItems.find((i) => i.route === section);
    if (!subSection) return sectionItem?.label;
    const subSectionItem = sectionItem?.children?.find((c) => c.route === subSection);
    return `${sectionItem?.label} - ${subSectionItem?.label}`;
  }
}
