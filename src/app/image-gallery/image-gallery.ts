import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ImageDialogComponent } from '../image-dialog/image-dialog';
import { IMAGE_GROUPS } from './image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.html',
  styleUrls: ['./image-gallery.scss'],
})
export class ImageGalleryComponent {
  images: any[] = [];

  constructor(private dialog: MatDialog, private route: ActivatedRoute) {}

ngOnInit() {
  this.route.params.subscribe(params => {
    const sectionRoute = params['section'];
    const subSectionRoute = params['subSection'];

    const section = IMAGE_GROUPS.find(s => s.route === sectionRoute);

    // Get images from subsection if available, else from section, else empty array
    this.images = subSectionRoute
      ? section?.children?.find(c => c.route === subSectionRoute)?.images ?? []
      : section?.images ?? [];
  });
}

  openImage(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container',
    });
  }
}
