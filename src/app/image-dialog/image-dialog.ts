import { AfterViewInit, Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import panzoom from 'panzoom';

@Component({
  selector: 'app-image-dialog',
  standalone: true,
  templateUrl: './image-dialog.html',
  styleUrls: ['./image-dialog.scss'],
})
export class ImageDialogComponent implements AfterViewInit {
  @ViewChild('zoomContainer', { static: true }) zoomContainer!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { imageUrl: string },
    private dialogRef: MatDialogRef<ImageDialogComponent>
  ) {}

  ngAfterViewInit(): void {
    panzoom(this.zoomContainer.nativeElement, {
      maxZoom: 5,
      minZoom: 1,
      bounds: true,
      boundsPadding: 0.1,
    });
  }

  onBackdropClick(): void {
    this.dialogRef.close();
  }
}
