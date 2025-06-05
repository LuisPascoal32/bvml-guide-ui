import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-gallery/image-dialog/image-dialog';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  images = [
     {title:'image1', path:'assets/image1.jpg'},
    {title:'image2', path:'assets/image2.jpg'},
    {title:'image3', path:'assets/image3.jpg'}
  ];

  constructor(public dialog: MatDialog) {}

  openImage(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container'
    });
  }
}