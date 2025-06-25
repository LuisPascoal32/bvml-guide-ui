import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { hazardousMaterials } from '../models/hazardous-materials';
import { PlateComponent } from '../plate/plate';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.html',
  styleUrls: ['./search-list.scss'],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    PlateComponent
  ]
})
export class SearchListComponent {
  constructor() {}

  items = hazardousMaterials;

  searchTerm: string = '';

  filteredItems() {
    if (!this.searchTerm) {
      return this.items;
    }
    const term = this.searchTerm.toLowerCase();
    return this.items.filter((item) =>
      item.numberUN.toLowerCase().includes(term)
    );
  }
}
