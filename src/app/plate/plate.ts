import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.html',
  styleUrls: ['./plate.scss']
})
export class PlateComponent {
  @Input() topValue: string = "129";
  @Input() bottomValue: string = "1203";

  private readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {},
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      maxHeight: "100%"
    })
  }
}
