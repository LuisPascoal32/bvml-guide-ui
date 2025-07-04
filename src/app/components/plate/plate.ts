import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HazardousMaterial } from '../../models/hazardous-materials.model';
import { PlateDetailsComponent } from '../plate-details/plate-details';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.html',
  styleUrls: ['./plate.scss']
})
export class PlateComponent {
  @Input() material!: HazardousMaterial;

  private readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(PlateDetailsComponent, {
      data: this.material,
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      maxHeight: "100%"
    })
  }
}
