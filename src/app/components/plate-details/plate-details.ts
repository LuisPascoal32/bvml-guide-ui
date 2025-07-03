import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertComponent } from "../alert/alert";
import { MapComponent } from '../map/map';

@Component({
  selector: 'app-plate-details',
  templateUrl: './plate-details.html',
  styleUrls: ['./plate-details.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MapComponent,
    MatExpansionModule,
    AlertComponent
],
})
export class PlateDetailsComponent {
  readonly dialogRef = inject(MatDialogRef<PlateDetailsComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}
