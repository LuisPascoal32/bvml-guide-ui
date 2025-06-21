import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.html',
  styleUrls: ['./checklist.scss'],
  imports: [
    NgFor,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    FormsModule,
  ],
})
export class ChecklistComponent {
  constructor() {}

  groups = [
    { title: 'Personal Gear', items: ['Helmet', 'Gloves', 'Boots'] },
    { title: 'Tools', items: ['Axe', 'Flashlight'] },
    { title: 'Communication', items: ['Radio'] },
  ];

  selectedItems: Set<string> = new Set();

  get totalItems(): number {
    return this.groups.reduce((sum, group) => sum + group.items.length, 0);
  }

  get progressValue(): number {
    return (this.selectedItems.size / this.totalItems) * 100;
  }

  isSelected(item: string): boolean {
    return this.selectedItems.has(item);
  }

  toggleItem(item: string): void {
    if (this.selectedItems.has(item)) {
      this.selectedItems.delete(item);
    } else {
      this.selectedItems.add(item);
    }
  }
}
