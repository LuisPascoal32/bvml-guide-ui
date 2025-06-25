import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MapComponent } from '../map/map';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MapComponent
  ],
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}
