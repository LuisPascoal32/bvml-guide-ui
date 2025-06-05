import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.html',
  styleUrls: ['./image-dialog.scss']
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) {}
}