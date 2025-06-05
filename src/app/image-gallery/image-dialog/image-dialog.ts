import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  template: `
    <div class="dialog-content">
      <img [src]="data.imageUrl" alt="Full Image" class="full-image" />
    </div>
  `,
  styles: [`
    .full-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .dialog-content {
      padding: 1rem;
      max-width: 90vw;
      max-height: 90vh;
      overflow: auto;
    }
  `]
})
export class ImageDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }) {}
}